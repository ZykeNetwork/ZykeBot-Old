const Discord = require("discord.js");

exports.run = async (client, message, args) => {

message.channel.send(message.author.lastMessage)

 }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lastmessage"],
  permLevel: "User"
};

exports.help = {
  name: "lastm",
  category: "Fun",
  description: "Reply with Your Last Message",
  usage: "lastm"
};

