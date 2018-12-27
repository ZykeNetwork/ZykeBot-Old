const request = require("request");

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  message.channel.startTyping();
  request({ uri: "https://dog-api.kinduff.com/api/facts", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
    message.channel.send(`🐶 **Did you know?** ${body.facts[0]}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pupfact"],
  permLevel: "User"
};

exports.help = {
  name: "dogfact",
  category: "Fun",
  description: "Reply with Dog Fact",
  usage: "dogfact"
};


