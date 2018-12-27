const request = require("request");

exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  message.channel.startTyping();
  request({
    url: "https://hargrimm-wikihow-v1.p.mashape.com/images?count=1",
    headers: {
      "X-Mashape-Key": client.config.mashapekey,
      "Accept": "application/json"
    },
    json: true
  }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
    message.channel.send({
      files: [{
        attachment: body["1"].replace(/http:\/\/pad\d\.whstatic.com/g, "https://www.wikihow.com"),
        name: "wikihow.png"
      }]
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["wiki", "howto"],
  permLevel: "User"
};

exports.help = {
  name: "wikihow",
  category: "Image",
  description: "Reply with Wikihow Image",
  usage: "wikihow [keyword]"
};

