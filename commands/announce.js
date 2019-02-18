const Discord = require("discord.js");
exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
const announcement = args.join(" ");
    message.delete().catch(O_o=>{});
	let announcementembed = new Discord.RichEmbed()
        .setTitle(":loudspeaker: Announcement")
  .setColor(4886754)
  .setDescription(announcement)
  .setTimestamp()
  .addField("© ZykeBot");
  
        message.channel.send(announcementembed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["announcement"],
  permLevel: "Administrator"
};

exports.help = {
  name: "announce",
  category: "Tools",
  description: "Announce something to member",
  usage: "announce announcement"
};
