const request = require("request");
const tempy = require("tempy");
const gm = require("gm").subClass({
  imageMagick: true
});

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  const image = message.mentions.users.first().avatarURL
  const haahCrop = tempy.file({extension: "png"});
  const haahFlip = tempy.file({extension: "png"});
  if (image !== undefined) {
    message.channel.startTyping();
    gm(request.get(image)).gravity("West").crop("50%", 0).strip().write(haahCrop, (error) => {
      if (error) throw new Error(error);
      gm(haahCrop).flop().strip().write(haahFlip, (error) => {
        if (error) throw new Error(error);
        gm(haahCrop).append(haahFlip, true).strip().stream((error, stdoutFinal) => {
          if (error) throw new Error(error);
          message.channel.stopTyping();
          message.channel.send({
            files: [{
              attachment: stdoutFinal,
              name: "haah.png"
            }]
          });
        });
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["magik4", "mirror2"],
  permLevel: "User"
};

exports.help = {
  name: "racecar",
  category: "Image",
  description: "It will make Racercar to Racercar",
  usage: "racecar @mention"
};



