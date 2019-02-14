exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars

let score = client.getScore.get(message.author.id, message.guild.id);
  return message.reply(`You currently have ${score.points} points and are level ${score.level}!`);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mypoint"],
  permLevel: "User"
};

exports.help = {
  name: "points",
  category: "Economy",
  description: "Checkout your points",
  usage: "points"
};
