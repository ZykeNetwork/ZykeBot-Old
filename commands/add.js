const yt = require('ytdl-core');
exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
let queue = {};
const msg = message
let url = msg.content.split(' ')[1];
		if (url == '' || url === undefined) return msg.channel.sendMessage(`You must add a YouTube video URL or ID`);
		yt.getInfo(url, (err, info) => {
			if(err) return msg.channel.sendMessage('Invalid YouTube Link: ' + err);
			if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
			queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
			msg.channel.sendMessage(`added **${info.title}** to the queue`);
		});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["addmusic"],
  permLevel: "User"
};

exports.help = {
  name: "add",
  category: "Music",
  description: "add some music",
  usage: "add https://youtube.com/watch?v=ID"
};

