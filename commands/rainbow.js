exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("Mention yourself as idoit");
let stdout = await client.API.rainbow(message.mentions.users.first().avatarURL);
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "rainbow.png"
          }]
        });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rainbo"],
  permLevel: "User"
};

exports.help = {
  name: "rainbow",
  category: "Image",
  description: "rainbow overlay",
  usage: "rainbow @mention"
};



