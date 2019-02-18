const Discord = require("discord.js");
const urban = require("urban");
exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  if (!message.channel.nsfw) return message.channel.send("NSFW : Move to some 18+ channel")
  if(args.length < 1) return message.reply("Please enter something!");
    let XD = args.join(" "); 
    urban(XD).first(json => {
        if(!json) return message.reply("No results found!")

        let urbEmbed = new Discord.RichEmbed()
        .setColor("00ff00")
        .setTitle(json.word)
        .setDescription(json.definition)
        .addField("Upvotes", json.thumbs_up, true)
        .addField("Downvotes", json.thumbs_down, true)
        .setFooter(`Written by: ${json.author}`);

        message.channel.send(urbEmbed)
    });

  }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["urban"],
  permLevel: "User"
};

exports.help = {
  name: "dictionary",
  category: "Fun",
  description: "Meaning of Word from Urban Dictionary",
  usage: "dictionary word"
};