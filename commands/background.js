const Discord = require("discord.js");
const request = require("request");
const tempy = require("tempy");
const fs = require("fs");
const gm = require("gm").subClass({
  imageMagick: true
});

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("Mention yourself as idoit");
 const image = message.mentions.users.first().avatarURL
  if (image !== undefined) {
    message.channel.startTyping();
    gm(request(image)).crop(140,100).background("#FF0000").extent(340,300).strip().stream((error, stdout) => {
      if (error) throw new Error(error);
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: stdout,
          name: "background.png"
        }]
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["backg"],
  permLevel: "User"
};

exports.help = {
  name: "background",
  category: "Image",
  description: "changes background from image",
  usage: "background @mentin"
};

