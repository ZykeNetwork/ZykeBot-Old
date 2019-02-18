const Discord = require("discord.js");
exports.run = async (client, message, args) => {
	let question = args.slice(0).join(" ");

  if (args.length === 0)
  return message.reply('**Invalid Format:** `?poll <Question>`')

  const embed = new Discord.RichEmbed()
  .setTitle("A Poll Has Been Started!")
  .setColor("#5599ff")
  .setDescription(`${question}`)
  .setFooter(`Poll Started By: ${message.author.username}`, `${message.author.avatarURL}`);

  let msg = await message.channel.send({embed});

   await msg.react('👍');
   await msg.react('🤷');
   await msg.react('👎');
   
   message.delete({timeout: 1000});

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

