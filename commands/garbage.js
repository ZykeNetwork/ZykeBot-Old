exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("Mention yourself as idoit");
let stdout = await client.API.garbage(message.mentions.users.first().avatarURL);
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "garbage.png"
          }]
        });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["garbage"],
  permLevel: "User"
};

exports.help = {
  name: "garbage",
  category: "Image",
  description: "I am full of garbage",
  usage: "garbage @mentin"
};
