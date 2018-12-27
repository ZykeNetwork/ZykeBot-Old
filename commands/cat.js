const request = require("request");

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  message.channel.startTyping();
  request({
    url: "https://api.thecatapi.com/v1/images/search?format=json&mime_types=jpg,png",
    headers: {
      "x-api-key": client.config.cat
    },
    json: true
  }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
    message.channel.send({
      files: [{
        attachment: body[0].url,
        name: "cat.png"
      }]
    });
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kitters", "kitties", "kitty", "cattos", "catto", "cats"],
  permLevel: "User"
};

exports.help = {
  name: "cat",
  category: "Images",
  description: "Random Images of kitties",
  usage: "cat or kitties or whatevery you want"
};

