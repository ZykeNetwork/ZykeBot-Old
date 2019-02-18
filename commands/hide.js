exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("Mention yourself as idoit");
let stdout = await client.API.hide(message.mentions.users.first().avatarURL, message.author.avatarURL);
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "hide.png"
          }]
        });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hides"],
  permLevel: "User"
};

exports.help = {
  name: "hide",
  category: "Image",
  description: "Hide yourself from user",
  usage: "hide @mentin"
};
