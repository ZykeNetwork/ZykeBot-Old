const Discord = require('discord.js');

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
 var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply("You are not in Voice Channel")
    VC.join()
        .then(connection => {
            const dispatcher = connection.playFile('./assets/audio/airhorn.wav');
            dispatcher.on("end", end => {VC.leave()});
        })
        .catch(console.error);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["horn"],
  permLevel: "User"
};

exports.help = {
  name: "airhorn",
  category: "Audio",
  description: "Play Horn for you in VC",
  usage: "airhorn"
};
