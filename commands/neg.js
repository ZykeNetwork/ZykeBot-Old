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
    gm(request(image)).negative().strip().stream((error, stdout) => {
      if (error) throw new Error(error);
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: stdout,
          name: "negative.png"
        }]
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["negative"],
  permLevel: "User"
};

exports.help = {
  name: "neg",
  category: "Image",
  description: "genrates negative image",
  usage: "neg @mentin"
};

