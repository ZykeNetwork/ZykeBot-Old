const yt = require('ytdl-core');
exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
let url = message.content.split(' ')[1];
if (client.queue[message.guild.id] === undefined) return message.channel.sendMessage(`Add some songs to the queue first with add command`);
		if (!message.guild.voiceConnection) return commands.join(message).then(() => commands.play(message));
		if (client.queue[message.guild.id].playing) return message.channel.sendMessage('Already Playing');
		let dispatcher;
		client.queue[message.guild.id].playing = true;

		console.log(client.queue);
		(function play(song) {
			console.log(song);
			if (song === undefined) return message.channel.sendMessage('All your tunes are played now leave me alone, or if you have something new then ?add pls').then(() => {
				client.queue[message.guild.id].playing = false;
				message.member.voiceChannel.leave();
			});
			message.channel.sendMessage(`Playing: **${song.title}** as requested by: **${song.requester}**`);
			dispatcher = message.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : 1 });
			let collector = message.channel.createCollector(m => m);
			collector.on('message', m => {
				if (m.content.startsWith("?" + 'pause')) {
					message.channel.sendMessage('paused').then(() => {dispatcher.pause();});
				} else if (m.content.startsWith("?" + 'resume')){
					message.channel.sendMessage('resumed').then(() => {dispatcher.resume();});
				} else if (m.content.startsWith("?" + 'skip')){
					message.channel.sendMessage('skipped').then(() => {dispatcher.end();});
				} else if (m.content.startsWith('volume+')){
					if (Math.round(dispatcher.volume*50) >= 100) return message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
					message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith('volume-')){
					if (Math.round(dispatcher.volume*50) <= 0) return message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
					message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith("?" + 'time')){
					message.channel.sendMessage(`time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
				}
			});
			dispatcher.on('end', () => {
				collector.stop();
				play(client.queue[message.guild.id].songs.shift());
			});
			dispatcher.on('error', (err) => {
				return message.channel.sendMessage('error: ' + err).then(() => {
					collector.stop();
					play(client.queue[message.guild.id].songs.shift());
				});
			});
		})(client.queue[message.guild.id].songs.shift());
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["playsong"],
  permLevel: "User"
};

exports.help = {
  name: "play",
  category: "Music",
  description: "play from queue",
  usage: "play"
};
