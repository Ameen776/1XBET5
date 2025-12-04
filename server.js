const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Bot is Running..."));
app.listen(process.env.PORT || 3000, () =>
  console.log("Server Running...")
);

require("./bot.js");