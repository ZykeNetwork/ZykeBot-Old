const Discord = require("discord.js");
module.exports = (client, member) => {
  const settings = client.getSettings(member.guild.id);
if (settings.leaveEnabled !== "true") return;

const leaveMessage1 = settings.leaveMessage.replace("!user", `${member}`);
const leaveMessage2 = leaveMessage1.replace("!server", `${member.guild.name}`);
const leaveMessage3 = leaveMessage2.replace("!memberCount", `${member.guild.memberCount}`);
 let leaveembed = new Discord.RichEmbed()
        .setTitle("A User Joined")
  .setColor(4886754)
  .setDescription(leaveMessage3)
  .setFooter("ID: " + member.user.id, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTimestamp()
  .addField("Full Username:", member.user.tag)

  member.guild.channels.find(c => c.name === settings.leaveChannel).send(leaveembed).catch(console.error);
};
