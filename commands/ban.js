const Discord = require("discord.js");
const sayings = [ 'https://media.giphy.com/media/ZikyVyLF7aEaQ/giphy.gif',
                    'https://media.giphy.com/media/l49JHQGBEEnhf3MME/giphy.gif',
                    'https://media.giphy.com/media/ZEMSgwIPn3Kq4/giphy.gif' ,
                    'https://media.giphy.com/media/e3WNjAUKGNGoM/giphy.gif',
                    'https://media.giphy.com/media/qPD4yGsrc0pdm/giphy.gif',
                    'https://media.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif',
                    'https://media.giphy.com/media/GB0lKzzxIv1te/giphy.gif'
        ];
 

        const result = Math.floor((Math.random() * sayings.length) + 0);
	  
exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply("you need to have the `Ban Members` permission on this server to ban people!");
  if (!message.guild.me.permissions.has("BAN_MEMBERS") && !message.channel.permissionsFor(message.guild.me).has("BAN_MEMBERS")) return message.reply("I don't have the `Ban Members` permission!");
  const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member.ban().then(() => {
	  var ballembed = new Discord.RichEmbed()
        .setColor("#FF5600")
        .addField("User Banned", `${user.tag}`)
        .addField("Ban By", `${message.author.username}`)
		.setImage(sayings[result]);
        return message.channel.send(ballembed);
      }).catch(error => {
        message.reply("I was unable to ban the member. Have you given me permissions?");
        console.error(error);
      });
    } else {
      message.reply("that user isn't in this server!");
    }
  } else {
    message.reply("you need to provide a user to ban!");
  }
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["block"],
  permLevel: "User"
};

exports.help = {
  name: "ban",
  category: "Moderation",
  description: "Ban a User from Server",
  usage: "ban [@mention]"
};

