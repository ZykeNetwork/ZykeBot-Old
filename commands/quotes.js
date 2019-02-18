const request = require("request");
const Discord = require("discord.js");

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  message.channel.startTyping();
  request({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
    headers: {
      "X-Mashape-Key": client.config.mashapekey,
      "Accept": "application/json",
	  "meme": `${args.join("+")}`
    },
    json: true
  }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
	const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL) //optional you can remove it

  .setColor(4886754)
  .setFooter("ZykeBot", client.user.avatarURL) //optional you can remove it
  .setTimestamp() //optional
  .addField("Quote", body[0].quote)
  .addField("Author", body[0].author,true)
  .addField("Category", body[0].category,true);

  message.channel.send({embed});
  });
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["quote", "quot", "qot"],
  permLevel: "User"
};

exports.help = {
  name: "quotes",
  category: "Fun",
  description: "Random Quotes of Famous People",
  usage: "quotes"
};