exports.run = function(client, message) {
    message.channel.send(`${message.author.username} has died.`).then(Message => {
        setTimeout(() => { Message.edit("Respawning..."); }, 1000);
        setTimeout(() => { Message.edit(`Revival complete. Welcome back, ${message.author.username}`); }, 1000);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["killyou", "suicide"],
  permLevel: "User"
};

exports.help = {
  name: "killme",
  category: "Fun",
  description: "Use with caution, this will kill you.",
  usage: "killme"
};

