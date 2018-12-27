const Discord = require("discord.js");

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
const ballembed = new Discord.RichEmbed()
        .setColor("#FF5600")
        .addField("Invitation Link", `https://discordapp.com/oauth2/authorize?client_id=516168874685890571&scope=bot&permissions=8`)
        return message.channel.send(ballembed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["inviteme"],
  permLevel: "User"
};

exports.help = {
  name: "invite",
  category: "Miscelaneous",
  description: "Invite Me to Dinner",
  usage: "invite"
};



