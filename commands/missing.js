exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("Mention yourself as idoit");
let stdout = await client.API.missing(message.mentions.users.first().avatarURL, message.mentions.users.first().username);
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "missing.png"
          }]
        });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["missi"],
  permLevel: "User"
};

exports.help = {
  name: "missing",
  category: "Image",
  description: "Someone is missing",
  usage: "missing @mentin"
};
