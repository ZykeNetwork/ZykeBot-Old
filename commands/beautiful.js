exports.run = async (message, args) => { // eslint-disable-line no-unused-vars
message.channel.send("I am beautiful");
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["beautiful"],
  permLevel: "User"
};

exports.help = {
  name: "beautiful",
  category: "Image",
  description: "Mention another user to admire a painting of them.",
  usage: "beautiful @username"
};

