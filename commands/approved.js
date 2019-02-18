exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("Mention yourself as idoit");
let stdout = await client.API.approved(message.mentions.users.first().avatarURL);
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "approved.png"
          }]
        });
};
	
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["approve"],
  permLevel: "User"
};

exports.help = {
  name: "approved",
  category: "Image",
  description: "Approve Someone",
  usage: "approved @mentin"
};

