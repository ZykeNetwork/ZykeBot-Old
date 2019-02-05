const Discord = require("discord.js");
const { createCanvas, loadImage } = require('canvas');
const request = require('node-superfetch');
const path = require('path');
exports.run = async (message, args) => { // eslint-disable-line no-unused-vars
const avatarURL = message.mentions.users.first().avatarURL({ format: 'png', size: 128 });
        try {
            const base = await loadImage(path.join(__dirname, '..', '..', 'assets', 'images', 'beautiful.png'));
            const { body } = await request.get(avatarURL);
            const avatar = await loadImage(body);
            const canvas = createCanvas(base.width, base.height);
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, base.width, base.height);
            ctx.drawImage(avatar, 249, 24, 105, 105);
            ctx.drawImage(avatar, 249, 223, 105, 105);
            ctx.drawImage(base, 0, 0);
            return message.channel.send({ files: [{ attachment: canvas.toBuffer(), name: 'beautiful.png' }] });
        } catch (err) {
            return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
        }
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["beautiful"],
  permLevel: "User"
};

exports.help = {
  name: "beautiful",
  category: "Image",
  description: "Mention another user to admire a painting of them.",
  usage: "beautiful @mentin"
};

