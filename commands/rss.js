const Discord = require("discord.js");
const request = require("request");

exports.run = async (client, message, args) => {


	message.channel.send("ranakhas#0001 is working on this")
 }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rssfeed"],
  permLevel: "User"
};

exports.help = {
  name: "rss",
  category: "Fun",
  description: "Reply with Latest Post from RSS Feed",
  usage: "rss feed.url/rss"
};

