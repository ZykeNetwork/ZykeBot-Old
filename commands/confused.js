exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("Mention yourself as idoit");
let stdout = await client.API.confused(message.author.avatarURL,
    message.mentions.users.first().avatarURL);
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "confused.png"
          }]
        });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["confuse"],
  permLevel: "User"
};

exports.help = {
  name: "confused",
  category: "Image",
  description: "Show someone how confused you are.",
  usage: "confused @mentin"
};
