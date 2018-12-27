const hug = ["https://s-media-cache-ak0.pinimg.com/originals/49/a2/1e/49a21e182fcdfb3e96cc9d9421f8ee3f.gif", "https://s-media-cache-ak0.pinimg.com/originals/16/46/f7/1646f720af76ea58853ef231028bafb1.gif", "https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif", "http://i.imgur.com/2WywS3T.gif", "http://i.imgur.com/8ruodNJ.gif", "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1461071296-7451c05f5aae134e2cceb276b085a871.gif", "http://i0.kym-cdn.com/photos/images/original/000/931/030/394.gif", "https://media.tenor.co/images/1171c186f9130d1efa4a186ad4371e8c/tenor.gif", "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0413/epic-hugs-friends-pikachu.gif"]
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
		.addField("Hugged By", `${message.author.username}`,true)
        .addField("to", `${message.mentions.users.first().username}`,true)
		.setImage(image);

        message.channel.send(ballembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["huguser"],
  permLevel: "User"
};

exports.help = {
  name: "hug",
  category: "Fun",
  description: "Hug a user",
  usage: "hug @mention"
};



