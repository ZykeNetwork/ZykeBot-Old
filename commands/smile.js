const request = require("request-promise-native");
const faceapp = require("faceapp");

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  const image = message.author.avatarURL
  if (image !== undefined) {
    message.channel.startTyping();
    const downloadedImage = await request({ uri: image, encoding: null });
    const faceImage = await faceapp.process(downloadedImage, "smile").catch(error => {
      console.log(error);
      return message.reply("I couldn't find a face!");
    });
    message.channel.stopTyping();
    message.channel.send({
      files: [{
        attachment: faceImage,
        name: "smile.png"
      }]
    }).catch((error) => {
      console.log("shut the heck up djs lol");
      console.log(error);
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "smile",
  category: "Image",
  description: "Put a Smile on you face if it is real",
  usage: "smile"
};
