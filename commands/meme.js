const request = require("request").defaults({ encoding: null });

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
const image = message.author.avatarURL
  if (args.length !== 0) {
    const [topText, bottomText] = args.join(" ").split(",").map(elem => elem.trim());
        const memeOutput = request(`https://memegen.link/custom/${encodeURI(topText.split(" ").join("_"))}.jpg?alt=${encodeURIComponent(image)}&font=impact&watermark=none`);
        message.channel.stopTyping();
        message.channel.send({
          files: [{
            attachment: memeOutput,
            name: "meme.png"
          }]
        });
    
  } else {
    message.reply("you need to provide some text to generate a meme!");
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["memes", "mame", "mama"],
  permLevel: "User"
};

exports.help = {
  name: "meme",
  category: "Miscelaneous",
  description: "Gernrates MEME",
  usage: "meme some text"
};



