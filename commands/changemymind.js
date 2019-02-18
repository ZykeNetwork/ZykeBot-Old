exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  if (args.length > 0) {
 
let stdout = await client.API.changemymind(message.author.avatarURL, args.join(" "));
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "changemymind.png"
          }]
        });

  } else {
    message.reply("you need to provide some text to generate a changemymind image !");
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mymind"],
  permLevel: "User"
};

exports.help = {
  name: "changemymind",
  category: "Miscelaneous",
  description: "Micrcraft Achievement Image",
  usage: "changemymind text"
};



