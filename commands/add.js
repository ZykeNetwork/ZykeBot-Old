const yt = require('ytdl-core');
exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
let url = message.content.split(' ')[1];
		if (url == '' || url === undefined) return message.channel.sendMessage(`You must add a YouTube video url, or id after add command`);
		yt.getInfo(url, (err, info) => {
			if(err) return message.channel.sendMessage('Invalid YouTube Link: ' + err);
			if (!client.queue.hasOwnProperty(message.guild.id)) client.queue[message.guild.id] = {}, client.queue[message.guild.id].playing = false, client.queue[message.guild.id].songs = [];
			client.queue[message.guild.id].songs.push({url: url, title: info.title, requester: message.author.username});
			message.channel.sendMessage(`added **${info.title}** to the queue`);
		});
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["addmusic"],
  permLevel: "User"
};

exports.help = {
  name: "add",
  category: "Music",
  description: "Add Video from YouTube",
  usage: "add youtube URL"
};
