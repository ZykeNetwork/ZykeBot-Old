exports.run = function(client, message) {
    message.channel.send(`Testing...`).then(Message => {
        setTimeout(() => { Message.edit("Checking permissions..."); }, 1000);
        setTimeout(() => { Message.edit(`Testing Succeeded! ZykeBot can read and send messages in this channel!`); }, 1000);
    });
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "test",
  category: "Miscellaneous",
  description: "Testing Command",
  usage: "test"
};
