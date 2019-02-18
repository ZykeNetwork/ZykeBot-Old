const Discord = require("discord.js");
const math = require('mathjs');
exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
let Input = args.join(" ");
let repo;
  try {
    repo = math.eval(Input);
  } catch (err) {
    repo = err
  }
   let ballembed = new Discord.RichEmbed()
        .setColor("#FF5600")
        .addField("Input", Input)
        .addField("Answer", repo);

        message.channel.send(ballembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mathematics"],
  permLevel: "User"
};

exports.help = {
  name: "math",
  category: "Miscelaneous",
  description: "Some Mathematics",
  usage: "math anything"
};



