const request = require("request");
const gm = require("gm").subClass({
  imageMagick: true
});

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  const image = message.mentions.users.first().avatarURL
  if (image !== undefined) {
    message.channel.startTyping();
    const ninegagWatermark = "./assets/images/9gagwatermark.png";
    gm(request(image)).composite(ninegagWatermark).gravity("East").strip().stream((error, stdout) => {
      if (error) throw new Error(error);
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: stdout,
          name: "9gag.png"
        }]
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ninegag", "gag"],
  permLevel: "User"
};

exports.help = {
  name: "9gag",
  category: "Image ",
  description: "Add 9gag watermarks to user's avatar",
  usage: "9gag @mention"
};



