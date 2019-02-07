const request = require("request");
const gm = require("gm").subClass({
  imageMagick: true
});

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
const image = message.mentions.users.first().avatarURL
  if (image !== undefined) {
    message.channel.startTyping();
    const approved = "./assets/images/approved.png";
    gm(request(image)).composite(approved).gravity("Centre").strip().stream((error, stdout) => {
      if (error) throw new Error(error);
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: stdout,
          name: "approved.png"
        }]
      });
    });
  }
};
	
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["approve"],
  permLevel: "User"
};

exports.help = {
  name: "approved",
  category: "Image",
  description: "Approve Someone",
  usage: "approved @mentin"
};

