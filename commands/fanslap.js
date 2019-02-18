exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("Mention yourself as idoit");
let stdout = await client.API.fanSlap(message.author.avatarURL,
    message.mentions.users.first().avatarURL);
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "fanslap.png"
          }]
        });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cuteslap"],
  permLevel: "User"
};

exports.help = {
  name: "fanslap",
  category: "Image",
  description: "Recive a slap form your fan",
  usage: "fanslap @mentin"
};
