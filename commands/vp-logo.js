const request = require("request");
const gm = require("gm").subClass({
  imageMagick: true
});

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
const image = message.mentions.users.first().avatarURL
  if (image !== undefined) {
    message.channel.startTyping();
    const ninegagWatermark = "./assets/images/vp.png";
    gm(request(image)).composite(ninegagWatermark).gravity("SouthEast").strip().stream((error, stdout) => {
      if (error) throw new Error(error);
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: stdout,
          name: "vp.png"
        }]
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["vpthemes"],
  permLevel: "User"
};

exports.help = {
  name: "vp-logo",
  category: "Image",
  description: "Add VP Logo to user's avatar",
  usage: "vp-logo @mention"
};


