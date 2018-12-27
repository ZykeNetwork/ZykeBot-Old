const Discord = require("discord.js");
const request = require("request");
const tempy = require("tempy");
const fs = require("fs");
const gm = require("gm").subClass({
  imageMagick: true
});

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("You Hate Yourself I Knew it I hate me too.....");
 const image = message.mentions.users.first().avatarURL
  const imageFile = tempy.file({extension: "png"});
  if (image !== undefined) {
    message.channel.startTyping();
    const template = "./assets/images/hates.png";
    const downloadImage = request.get(image).pipe(fs.createWriteStream(imageFile));
    downloadImage.on("finish", () => {
      gm(template).composite(downloadImage.path).gravity("Center").geometry("251x167-124-68").strip().stream((error, stdout) => {
        if (error) throw new Error(error);
        message.channel.stopTyping();
        message.channel.send({
          files: [{
            attachment: stdout,
            name: "hates.png"
          }]
        });
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hates"],
  permLevel: "User"
};

exports.help = {
  name: "hate",
  category: "Image",
  description: "4 things everyone hate",
  usage: "hate @mentin"
};

