const Discord = require('discord.js');

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars

message.member.voiceChannel('/assets/audio/winxp.opus');
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["windows", "xp"],
  permLevel: "User"
};

exports.help = {
  name: "winxp",
  category: "Audio",
  description: "Let's Play Something OLD like XP",
  usage: "winxp"
};

