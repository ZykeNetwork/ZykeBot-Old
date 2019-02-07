const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args, level) => {
	        const attachment = new Attachment(await client.API.achievement(message.author.displayAvatarURL({ format: "png", size: 32 }), args.join(" ")),
  "achievement.png");
			        message.channel.send(`${message.author},`, attachment);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["away"],
  permLevel: "User"
};

exports.help = {
  name: "afk",
  category: "Tools",
  description: "Sets your status to AFK.",
  usage: "afk or afk [Your afk message]"
};

