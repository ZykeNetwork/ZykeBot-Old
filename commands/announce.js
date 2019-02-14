const Discord = require("discord.js");
exports.run = async (message, args) => { // eslint-disable-line no-unused-vars
const channel = member.guild.channels.find("name", settings.announcementChannel);   
if (!channel) return; 
const announcement = args.join(" ");
    message.delete().catch(O_o=>{});
	let announcementembed = new Discord.RichEmbed()
        .setTitle(":loudspeaker: Announcement")
  .setColor(4886754)
  .setDescription(announcement)
  .setThumbnail(member.user.avatarURL)
  .setTimestamp()
  .addField("© ZykeBot");
  
        channel.send(announcementembed).catch(console.error);

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
