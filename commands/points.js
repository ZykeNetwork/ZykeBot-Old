const { Canvas } = require("canvas-constructor"); 
const { resolve, join } = require("path"); 
const { Attachment } = require("discord.js"); 
const { get } = require("snekfetch"); 
exports.run = async (client, message, args) => { 

let score = client.getScore.get(message.author.id, message.guild.id);

const name = message.author.username.length > 20 ? message.author.username.substring(0, 17) + "..." : message.author.username;
const imageUrlRegex = /\?size=2048$/g;
const { body: avatar } = await get(message.author.avatarURL.replace(imageUrlRegex, "?size=128"));

Canvas.registerFont(resolve(join(__dirname, "./LemonMilk.otf")), "LemonMilk");
const profileimage = new Canvas(400, 180)
  .setColor("#7289DA")
  .addRect(84, 0, 316, 180)
  .setColor("#2C2F33")
  .addRect(0, 0, 84, 180)
  .addRect(169, 26, 231, 46)
  .addRect(224, 108, 176, 46)
  .setShadowColor("rgba(22, 22, 22, 1)") 
  .setShadowOffsetY(5) 
  .setShadowBlur(10) 
  .addCircle(84, 90, 62)
  .addRoundImage(avatar, 20, 26, 128, 128, 64)
  .save()
  .createBeveledClip(20, 138, 128, 32, 5)
  .setColor("#23272A")
  .fill()
  .restore()
  .setTextAlign("center")
  .setTextFont("12pt LemonMilk")
  .setColor("#FFFFFF")
  .addText(name, 285, 54)
  .addText(`Level: ${score.level}`, 84, 159)
  .setTextAlign("left")
  .addText(`Score: ${score.points}`, 241, 136)
  .toBuffer();
  
message.channel.send({
          files: [{
            attachment: profileimage,
            name: "profilr.jpg"
          }]
        });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mypoint", "point", "profile", "card"],
  permLevel: "User"
};

exports.help = {
  name: "points",
  category: "Economy",
  description: "Checkout your points",
  usage: "points"
};
