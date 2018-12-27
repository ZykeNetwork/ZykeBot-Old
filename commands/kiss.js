const hug = ["https://media.giphy.com/media/6uFetT0Kw9Isg/giphy.gif", "https://media.giphy.com/media/124gj4XvM8f3fa/giphy.gif", "https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif", "https://media.giphy.com/media/YDB4EF3U6i6IM/giphy.gif", "https://media.giphy.com/media/CE1sk31EVmjNS/giphy.gif", "https://media.giphy.com/media/Nydo55HzhyGqI/giphy.gif", "https://media.giphy.com/media/udiIFmPkJQzkI/giphy.gif", "https://media.giphy.com/media/wf4UuPMYnwBck/giphy.gif"]
const rn = require('random-number')
const Discord = require("discord.js");

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("Well you can't hug the air...");
    let r = rn({
        min: 0,
        max: hug.length - 1,
        integer: true
    });
    var image = hug[r];
	let ballembed = new Discord.RichEmbed()
        .setColor("#FF5600")
		.addField("Kissed By", `${message.author.username}`,true)
        .addField("to", `${message.mentions.users.first().username}`,true)
		.setImage(image);

        message.channel.send(ballembed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kissuser"],
  permLevel: "User"
};

exports.help = {
  name: "kiss",
  category: "Image",
  description: "Kiss someone",
  usage: "kiss @mentin"
};
