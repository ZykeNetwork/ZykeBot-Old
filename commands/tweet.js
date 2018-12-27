const Canvas = require('canvas');
const fs = require('fs');
const Discord = require("discord.js");

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    const user = args.join(" ");
	let Image = Canvas.Image,
    canvas = new Canvas(960, 428),
    ctx = canvas.getContext('2d');
  fs.readFile('./assets/images/tweet.jpg', (err, image) => {
    if (err) return console.log(err);
      let img = new Image
      img.src = image;
      ctx.drawImage(img, 0, 0, 960, 428);
      ctx.font = "52px Comic Sans";
      ctx.fillText(user, 75, 177)
      canvas.toBuffer((err, buff) => {
        if (err) return console.log(err);
        message.channel.sendFile(buff)
      })
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tweeter"],
  permLevel: "User"
};

exports.help = {
  name: "tweet",
  category: "Fun",
  description: "Tweet something as  @discordapp.",
  usage: "tweet [text]"
};
