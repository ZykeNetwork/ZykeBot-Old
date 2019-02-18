exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("Mention yourself as idoit");
let stdout = await client.API.stepped(message.mentions.users.first().avatarURL);
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "stepped.png"
          }]
        });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["shit"],
  permLevel: "User"
};

exports.help = {
  name: "stepped",
  category: "Image",
  description: "I stepped into shit",
  usage: "stepped @mentin"
};
