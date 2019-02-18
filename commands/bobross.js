exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("Mention yourself as idoit");
let stdout = await client.API.bobRoss(message.mentions.users.first().avatarURL);
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "bobRoss.png"
          }]
        });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["paintme"],
  permLevel: "User"
};

exports.help = {
  name: "bobross",
  category: "Image",
  description: "Let me paint your pic",
  usage: "bobross @mentin"
};
