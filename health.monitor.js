// ===================================================
// 🩺 HEALTH MONITOR FOR RENDER DEPLOYMENT
// 📊 MONITOR BOT HEALTH & PERFORMANCE
// ===================================================

const os = require('os');
const process = require('process');

class HealthMonitor {
    constructor(bot, dbManager) {
        this.bot = bot;
        this.dbManager = dbManager;
        this.startTime = new Date();
        this.setupHealthChecks();
    }

    setupHealthChecks() {
        // 🔄 Periodic health check every 5 minutes
        setInterval(() => {
            this.performHealthCheck();
        }, 5 * 60 * 1000);
    }

    async performHealthCheck() {
        try {
            const healthInfo = await this.getHealthInfo();
            
            // Log health status
            if (healthInfo.status === 'healthy') {
                console.log('✅ Health check passed:', healthInfo);
            } else {
                console.warn('⚠️ Health check warning:', healthInfo);
            }

            return healthInfo;

        } catch (error) {
            console.error('❌ Health check failed:', error);
            return { status: 'error', error: error.message };
        }
    }

    async getHealthInfo() {
        const stats = await this.dbManager.getAllStats();
        
        return {
            status: 'healthy',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            memory: {
                used: process.memoryUsage().rss / 1024 / 1024,
                total: os.totalmem() / 1024 / 1024,
                free: os.freemem() / 1024 / 1024
            },
            system: {
                load: os.loadavg(),
                platform: os.platform(),
                arch: os.arch()
            },
            bot: {
                totalUsers: stats.totalUsers,
                activeUsers: stats.activeUsers,
                totalPredictions: stats.totalPredictions,
                pendingPayments: stats.pendingPayments
            },
            performance: {
                responseTime: 'normal',
                database: 'connected'
            }
        };
    }

    async getDetailedStats() {
        const healthInfo = await this.getHealthInfo();
        const backupManager = new (require('./backup-manager'))(this.dbManager);
        const backupInfo = backupManager.getBackupInfo();

        return {
            ...healthInfo,
            backups: backupInfo,
            version: "16.0.0",
            environment: process.env.NODE_ENV || 'development'
        };
    }
}

module.exports = HealthMonitor;