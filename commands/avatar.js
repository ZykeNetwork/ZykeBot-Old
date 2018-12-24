const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 if (args.length === 0) {
    const embed = new Discord.RichEmbed()
  .setAuthor(`${message.author.username} Requested Avatar!`, message.author.avatarURL)
  .setColor(4886754)
  .setFooter("© Lazy BOT", client.user.avatarURL)
  .setImage(message.author.avatarURL)
  .setTimestamp();
 
  message.channel.send({embed});
  } else if (message.mentions.users.first() !== undefined) {
    const embed = new Discord.RichEmbed()
  .setAuthor(`${message.author.username} Requested Avatar!`, message.author.avatarURL)
  .setColor(4886754)
  .setFooter("© Lazy BOT", client.user.avatarURL)
  .setImage(message.mentions.users.first().avatarURL)
  .setTimestamp();
 
  message.channel.send({embed});
  } else {
    const embed = new Discord.RichEmbed()
  .setAuthor(`${message.author.username} Requested Avatar!`, message.author.avatarURL)
  .setColor(4886754)
  .setFooter("© Lazy BOT", client.user.avatarURL)
  .setImage(message.author.avatarURL)
  .setTimestamp();
 
  message.channel.send({embed});
  }
 }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["avata", "userimage"],
  permLevel: "User"
};

exports.help = {
  name: "avatar",
  category: "Image",
  description: "Reply with User's Avatar aka Profile Pic.",
  usage: "avatar [@user]"
};

