// ===================================================
// 🔄 ENHANCED BACKUP MANAGER FOR RENDER
// 📊 AUTOMATIC DATA BACKUP & RESTORATION
// ===================================================

const fs = require('fs');
const path = require('path');
const axios = require('axios');

class EnhancedBackupManager {
    constructor(dbManager) {
        this.dbManager = dbManager;
        this.backupDir = path.join(__dirname, 'backups');
        this.ensureBackupDir();
        this.setupAutoBackup();
    }

    ensureBackupDir() {
        if (!fs.existsSync(this.backupDir)) {
            fs.mkdirSync(this.backupDir, { recursive: true });
        }
    }

    setupAutoBackup() {
        // 🔄 Auto backup every 6 hours
        setInterval(() => {
            this.createLocalBackup();
        }, 6 * 60 * 60 * 1000);

        // 📅 Daily backup at 2 AM
        const cron = require('node-cron');
        cron.schedule('0 2 * * *', () => {
            this.createLocalBackup();
        });

        console.log('✅ Auto-backup system initialized');
    }

    async createLocalBackup() {
        try {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const backupFile = path.join(this.backupDir, `backup-${timestamp}.json`);
            
            const backupData = {
                timestamp: new Date().toISOString(),
                version: "16.0.0",
                data: {
                    users: await this.dbManager.getAllUsers(),
                    payments: await this.dbManager.getAllPayments(),
                    settings: await this.dbManager.getSettings()
                }
            };

            fs.writeFileSync(backupFile, JSON.stringify(backupData, null, 2));
            console.log(`✅ Local backup created: ${backupFile}`);

            // 🧹 Clean old backups (keep last 10)
            this.cleanOldBackups();

            return backupFile;

        } catch (error) {
            console.error('❌ Local backup failed:', error);
            return null;
        }
    }

    cleanOldBackups() {
        try {
            const files = fs.readdirSync(this.backupDir)
                .filter(file => file.startsWith('backup-') && file.endsWith('.json'))
                .map(file => ({
                    name: file,
                    time: fs.statSync(path.join(this.backupDir, file)).mtime.getTime()
                }))
                .sort((a, b) => b.time - a.time);

            // Keep only last 10 backups
            if (files.length > 10) {
                files.slice(10).forEach(file => {
                    fs.unlinkSync(path.join(this.backupDir, file.name));
                    console.log(`🧹 Deleted old backup: ${file.name}`);
                });
            }
        } catch (error) {
            console.error('Error cleaning old backups:', error);
        }
    }

    async restoreFromLatestBackup() {
        try {
            const files = fs.readdirSync(this.backupDir)
                .filter(file => file.startsWith('backup-') && file.endsWith('.json'))
                .map(file => ({
                    name: file,
                    time: fs.statSync(path.join(this.backupDir, file)).mtime.getTime()
                }))
                .sort((a, b) => b.time - a.time);

            if (files.length === 0) {
                console.log('❌ No backup files found');
                return false;
            }

            const latestBackup = files[0];
            const backupPath = path.join(this.backupDir, latestBackup.name);
            const backupData = JSON.parse(fs.readFileSync(backupPath, 'utf8'));

            console.log(`🔄 Restoring from backup: ${latestBackup.name}`);

            // Restore users
            for (const user of backupData.data.users) {
                await this.dbManager.saveUser(user.user_id, user);
            }

            // Restore settings
            await this.dbManager.updateSettings(backupData.data.settings);

            console.log(`✅ Restore completed: ${backupData.data.users.length} users`);
            return true;

        } catch (error) {
            console.error('❌ Restore failed:', error);
            return false;
        }
    }

    async exportData() {
        try {
            const exportData = {
                timestamp: new Date().toISOString(),
                version: "16.0.0",
                statistics: await this.dbManager.getAllStats(),
                users: await this.dbManager.getAllUsers(),
                payments: await this.dbManager.getAllPayments(),
                settings: await this.dbManager.getSettings()
            };

            return exportData;
        } catch (error) {
            console.error('Export data error:', error);
            return null;
        }
    }

    getBackupInfo() {
        try {
            const files = fs.readdirSync(this.backupDir)
                .filter(file => file.startsWith('backup-') && file.endsWith('.json'));

            return {
                totalBackups: files.length,
                latestBackup: files.length > 0 ? 
                    fs.statSync(path.join(this.backupDir, files[files.length-1])).mtime : null,
                backupSize: files.reduce((total, file) => 
                    total + fs.statSync(path.join(this.backupDir, file)).size, 0
                )
            };
        } catch (error) {
            console.error('Get backup info error:', error);
            return { totalBackups: 0, latestBackup: null, backupSize: 0 };
        }
    }
}

module.exports = EnhancedBackupManager;