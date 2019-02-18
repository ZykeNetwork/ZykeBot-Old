exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("Mention yourself as idoit");
let stdout = await client.API.wanted(message.mentions.users.first().avatarURL);
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "wanted.png"
          }]
        });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["publicno1"],
  permLevel: "User"
};

exports.help = {
  name: "wanted",
  category: "Image",
  description: "Public Enemy No.1 Image",
  usage: "wanted @mentin"
};
