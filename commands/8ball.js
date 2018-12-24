const Discord = require("discord.js");
exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars

	let question = args.slice(0).join(' ');
    if (!question)
    return message.reply("Please ask a question!");

    var sayings = [ ':8ball: Absolutly! ',
                    ':8ball: Absolutly not',
                    ':8ball: It is true' ,
                    ':8ball: Impossible ',
                    ':8ball: Of course ',
                    ':8ball: I do not think so ',
                    ':8ball: It is true ',
                    ':8ball: It is not true ',
                    ':8ball: I am very undoubtful of that.',
                    ':8ball: I am very doubtful of that ',
                    ':8ball: Sources point to no ',
                    ':8ball: Theories prove it.',
                    ':8ball: Reply hazy try again ',
                    ':8ball: Ask again later',
                    ':8ball: Better not tell you now ',
                    ':8ball: Cannot predict now ',
                    ':8ball: Concentrate and ask again.'
        ];
 

        var result = Math.floor((Math.random() * sayings.length) + 0);


        let ballembed = new Discord.RichEmbed()
        .setColor("#FF5600")
        .addField("Question", question)
        .addField("Answer", sayings[result]);

        message.channel.send(ballembed);
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["magic8ball"],
  permLevel: "User"
};

exports.help = {
  name: "8ball",
  category: "Fun",
  description: "Let me ask guess the answers of your question",
  usage: "8ball question"
};
