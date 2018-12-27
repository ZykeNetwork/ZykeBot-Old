const lengthen = require("long-url");
const isURL = require("is-url");

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  message.channel.startTyping();
  if (args.length === 0) {
    message.channel.stopTyping();
    message.reply("you need to provide a short URL to lengthen!");
  } else {
    if (isURL(args[0])) {
      lengthen(args[0], (error, url) => {
        if (error) throw new Error(error);
        message.channel.stopTyping();
        message.channel.send(url);
      });
    } else {
      message.channel.stopTyping();
      message.reply("you need to provide a short URL to lengthen!");
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["longurl", "lengthenurl", "longuri", "lengthenuri"],
  permLevel: "User"
};

exports.help = {
  name: "lengthen",
  category: "Miscelaneous",
  description: "Make Short URL Longs",
  usage: "lengthen short URL"
};

