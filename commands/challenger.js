exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("Mention yourself as idoit");
let stdout = await client.API.challenger(message.mentions.users.first().avatarURL);
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "challenger.png"
          }]
        });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["challengera"],
  permLevel: "User"
};

exports.help = {
  name: "challenger",
  category: "Image",
  description: "challenger approch",
  usage: "challenger @mentin"
};
