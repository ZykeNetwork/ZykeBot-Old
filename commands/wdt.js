const request = require("request");
const tempy = require("tempy");
const fs = require("fs");
const gm = require("gm").subClass({
  imageMagick: true
});

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  const image = message.mentions.users.first().avatarURL
  const imageFile = tempy.file({extension: "png"});
  if (image !== undefined) {
    message.channel.startTyping();
    const template = "./assets/images/whodidthis.png";
    const downloadImage = request.get(image).pipe(fs.createWriteStream(imageFile));
    downloadImage.on("finish", () => {
      gm(template).composite(downloadImage.path).gravity("Center").geometry("374x374+0+0").strip().stream((error, stdout) => {
        if (error) throw new Error(error);
        message.channel.stopTyping();
        message.channel.send({
          files: [{
            attachment: stdout,
            name: "whodidthis.png"
          }]
        });
      });
    });
  }
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["whodidthis"],
  permLevel: "User"
};

exports.help = {
  name: "wdt",
  category: "Image",
  description: "Add User's avatar in WDT image",
  usage: "wdt @mention"
};
