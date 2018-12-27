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
    gm(request(image)).monochrome().strip().stream((error, stdout) => {
      if (error) throw new Error(error);
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: stdout,
          name: "mono.png"
        }]
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["monochrome"],
  permLevel: "User"
};

exports.help = {
  name: "mono",
  category: "Image",
  description: "genrates monochrome image",
  usage: "mono @mentin"
};

