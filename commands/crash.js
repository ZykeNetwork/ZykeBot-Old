exports.run = async (client, message) => {
    message.channel.send(`Wow. That's awful of you, ${message.author.username}. I'm just here trying to be helpful and make friends but you want to shut me down. Quite rude!`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["shutdown"],
  permLevel: "User"
};

exports.help = {
  name: "crash",
  category: "System",
  description: "This will Crash Me",
  usage: "crash [reason]"
};
