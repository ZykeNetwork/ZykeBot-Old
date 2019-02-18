const Discord = require('discord.js');

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
 var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply("You are not in Voice Channel")
    VC.join()
        .then(connection => {
            const dispatcher = connection.playFile('./assets/audio/fbi.opus');
            dispatcher.on("end", end => {VC.leave()});
        })
        .catch(console.error);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fib"],
  permLevel: "User"
};

exports.help = {
  name: "fbi",
  category: "Audio",
  description: "FBI raid outthere",
  usage: "fbi"
};
