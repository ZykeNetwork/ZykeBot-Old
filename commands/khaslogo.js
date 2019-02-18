const request = require("request");
const gm = require("gm").subClass({
  imageMagick: true
});

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
const image = message.mentions.users.first().avatarURL
  if (image !== undefined) {
    message.channel.startTyping();
    const ninegagWatermark = "./assets/images/khaslogo.png";
    gm(request(image)).composite(ninegagWatermark).gravity("SouthEast").strip().stream((error, stdout) => {
      if (error) throw new Error(error);
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: stdout,
          name: "khaslogo.png"
        }]
      });
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["khas", "footerlogo"],
  permLevel: "User"
};

exports.help = {
  name: "khaslogo",
  category: "Image ",
  description: "Add KHAS watermarks to user's avatar",
  usage: "khas @mention"
};
