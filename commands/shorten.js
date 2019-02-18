const isgd = require("isgd");
const isURL = require("is-url");

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  message.channel.startTyping();
  if (args.length === 0) {
    message.channel.stopTyping();
    message.reply("you need to provide a URL to shorten!");
  } else {
    if (isURL(args[0])) {
      isgd.shorten(args[0], (res) => {
        message.channel.stopTyping();
        message.channel.send(res);
      });
    } else {
      message.channel.stopTyping();
      message.reply("you need to provide a URL to shorten!");
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["shorturl", "shorturl", "shorturi", "shortenuri"],
  permLevel: "User"
};

exports.help = {
  name: "shorten",
  category: "Miscelaneous",
  description: "Make Long URL Short",
  usage: "shorten long URL"
};


