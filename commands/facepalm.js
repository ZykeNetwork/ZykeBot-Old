exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
let stdout = await client.API.facepalm(message.author.avatarURL);
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "batslap.png"
          }]
        });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["face_palm", ":face_palm:"],
  permLevel: "User"
};

exports.help = {
  name: "facepalm",
  category: "Image",
  description: "facepalm image",
  usage: "facepalm"
};
