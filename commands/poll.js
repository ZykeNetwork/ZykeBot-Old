const Discord = require("discord.js");
exports.run = (client, message, args) => {
	let question = args.slice(0).join(" ");

  if (args.length === 0)
  return message.reply('**Invalid Format:** `!Poll <Question>`')

  const embed = new Discord.RichEmbed()
  .setTitle("A Poll Has Been Started!")
  .setColor("#5599ff")
  .setDescription(`${question}`)
  .setFooter(`Poll Started By: ${message.author.username}`, `${message.author.avatarURL}`)

  message.channel.send({embed})
  .then(msg => {
    msg.react('\:thumbsup:')
	msg.react('\:thumbsdown:')
	msg.react('\:shrug:')
  })
  .catch(() => console.error('Emoji failed to react.'));

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["askuser"],
  permLevel: "User"
};

exports.help = {
  name: "poll",
  category: "Miscelaneous",
  description: "Ask Members via Poll",
  usage: "poll Format"
};

