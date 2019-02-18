exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
let url = message.content.split(' ')[1];
return new Promise((resolve, reject) => {
			const voiceChannel = message.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('I couldn\'t connect to your voice channel...');
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["joinvoice"],
  permLevel: "User"
};

exports.help = {
  name: "join",
  category: "Music",
  description: "Join's your Voice Channel",
  usage: "join"
};
