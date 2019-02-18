exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
if (!message.mentions.users.first()) return message.channel.send("Mention yourself as idoit");
let stdout = await client.API.crush(message.mentions.users.first().avatarURL, message.author.avatarURL);
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "crush.png"
          }]
        });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["crusher"],
  permLevel: "User"
};

exports.help = {
  name: "crush",
  category: "Image",
  description: "Show that you have crush on him/her",
  usage: "crush @mentin"
};
