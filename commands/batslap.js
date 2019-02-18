exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("Mention yourself as idoit");
let stdout = await client.API.batSlap(message.author.avatarURL,
    message.mentions.users.first().avatarURL);
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "batslap.png"
          }]
        });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["batman", "slap"],
  permLevel: "User"
};

exports.help = {
  name: "batslap",
  category: "Image",
  description: "slap someone",
  usage: "batslap @mentin"
};
