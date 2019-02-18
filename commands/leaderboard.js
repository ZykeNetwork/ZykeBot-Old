const Discord = require('discord.js');

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars

  const embed = new Discord.RichEmbed()
    .setTitle("Leaderboard")
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription("Our top 10 points leaders!")
    .setColor(0x00AE86);
   const top10 = client.top10.all(message.guild.id);
  for(const data of top10) {
    embed.addField(client.users.get(data.user).tag, `${data.points} points (level ${data.level})`);
  }
  return message.channel.send({embed});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lb"],
  permLevel: "User"
};

exports.help = {
  name: "leaderboard",
  category: "Economy",
  description: "Checkout how is leading",
  usage: "leaderboard"
};
