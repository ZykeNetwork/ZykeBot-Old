const request = require("request").defaults({ encoding: null });

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  if (args.length > 0) {
 
let stdout = await client.API.achievement(message.author.avatarURL, args.join(" "));
   message.channel.send({
          files: [{
            attachment: stdout,
            name: "achievement.png"
          }]
        });

  } else {
    message.reply("you need to provide some text to generate a Minecraft achievement!");
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ach", "achievement", "minecraft"],
  permLevel: "User"
};

exports.help = {
  name: "mc",
  category: "Miscelaneous",
  description: "Micrcraft Achievement Image",
  usage: "mc achievement-text"
};



