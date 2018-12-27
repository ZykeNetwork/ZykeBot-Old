const Discord = require("discord.js");
const request = require("request");

exports.run = async (client, message, args) => {
const sayMessage = args.join(" ");
var feed = sayMessage
	
	ajax(feed, {
		accepts:{
			xml:"application/rss+xml"
		},
		dataType:"xml",
		success:function(data) {
			//Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript

			$(data).find("item").each(function () { // or "item" or whatever suits your feed
				var el = $(this);
				console.log("------------------------");
				console.log("title      : " + el.find("title").text());
				console.log("link       : " + el.find("link").text());
				console.log("description: " + el.find("description").text());
			});
	

		}	
	});
	message.channel.send(title)
 }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rssfeed"],
  permLevel: "User"
};

exports.help = {
  name: "rss",
  category: "Fun",
  description: "Reply with Latest Post from RSS Feed",
  usage: "rss feed.url/rss"
};

