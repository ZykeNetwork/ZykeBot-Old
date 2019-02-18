exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("Mention yourself as idoit");
let stdout = await client.API.beautiful(message.mentions.users.first().avatarURL);
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "beautiful.png"
          }]
        });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["beautiful"],
  permLevel: "User"
};

exports.help = {
  name: "beautiful",
  category: "Image",
  description: "Mention another user to admire a painting of them.",
  usage: "beautiful @username"
};
