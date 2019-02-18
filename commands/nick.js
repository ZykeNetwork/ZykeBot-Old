exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  if (!message.member.hasPermission('CHANGE_NICKNAME')) return;
  if (args.length > 0) {
 
let stdout = await client.API.achievement(message.author.avatarURL, args.join(" "));
    await message.guild.me.setNickname(args.join(' '));
    message.reply("as you wish");


  } else {
    message.reply("you need to giveme new name");
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["setnick","setname"],
  permLevel: "Arcenas"
};

exports.help = {
  name: "nick",
  category: "System",
  description: "change my name",
  usage: "nick @new name"
};


