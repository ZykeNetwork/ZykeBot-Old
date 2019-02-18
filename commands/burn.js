const Discord = require("discord.js");
exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
 if (!message.mentions.users.first()) return message.channel.send('Mention someone.')
    message.channel.send(`**${message.author.username}** *burned* **${message.mentions.users.first().username}**\nYou need some ice for that bud? :snowflake:\nhttps://cdn.discordapp.com/attachments/186920285285384192/262348996784291840/image.gif`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["burnuser"],
  permLevel: "User"
};

exports.help = {
  name: "burn",
  category: "Fun",
  description: "Burn a user.",
  usage: "burn @mention"
};
