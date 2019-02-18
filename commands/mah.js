const request = require("request");
const gm = require("gm").subClass({
  imageMagick: true
});

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
const image = message.mentions.users.first().avatarURL
  if (image !== undefined) {
    message.channel.startTyping();
    const ninegagWatermark = "./assets/images/mt.png";
    gm(request(image)).composite(ninegagWatermark).gravity("NorthWest").strip().stream((error, stdout) => {
      if (error) throw new Error(error);
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: stdout,
          name: "mah.png"
        }]
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mt", "mahthemes"],
  permLevel: "User"
};

exports.help = {
  name: "mah",
  category: "Image",
  description: "Add MAH Logo to user's avatar",
  usage: "mah @mention"
};


