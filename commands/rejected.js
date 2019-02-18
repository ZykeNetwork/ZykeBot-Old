exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("Mention yourself as idoit");
let stdout = await client.API.rejected(message.mentions.users.first().avatarURL);
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "rejected.png"
          }]
        });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reject"],
  permLevel: "User"
};

exports.help = {
  name: "rejected",
  category: "Image",
  description: "Reject Someone",
  usage: "rejected @mention"
};



