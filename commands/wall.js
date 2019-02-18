const request = require("request");
const tempy = require("tempy");
const gm = require("@tohru/gm").subClass({
  imageMagick: true
});

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
     if (!message.mentions.users.first()) return message.channel.send('Mention someone.')
	const image = message.mentions.users.first().avatarURL
  const imageResized = tempy.file({ extension: "png" });
  if (image !== undefined) {
    message.channel.startTyping();
    gm(request.get(image)).resize(128).strip().write(imageResized, (error) => {
      if (error) throw new Error(error);
      gm(imageResized).virtualPixel("tile").matteColor("none").out("-background", "none").resize("512x512!").out("-distort").out("Perspective").out("0,0,57,42 0,128,63,130 128,0,140,60 128,128,140,140").strip().stream((error, stdout) => {
        if (error) throw new Error(error);
        message.channel.stopTyping();
        message.channel.send({
          files: [{
            attachment: stdout,
            name: "wall.png"
          }]
        });
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["waal"],
  permLevel: "User"
};

exports.help = {
  name: "wall",
  category: "Image",
  description: "Reply with User's Avatar aka Profile Pic.",
  usage: "wall [@user]"
};

