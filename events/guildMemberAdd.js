const Discord = require("discord.js");
module.exports = (client, member) => {
  const settings = client.getSettings(member.guild.id);

  if (settings.welcomeEnabled !== "true") return;

const welcomeMessage1 = settings.welcomeMessage.replace("!user", `${member}`);
const welcomeMessage2 = welcomeMessage1.replace("!server", `${member.guild.name}`);
const welcomeMessage3 = welcomeMessage2.replace("!memberCount", `${member.guild.memberCount}`);
 let welcomembed = new Discord.RichEmbed()
        .setTitle("A User Joined")
  .setColor(4886754)
  .setDescription(welcomeMessage3)
  .setFooter("ID: " + member.user.id, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTimestamp()
  .addField("Full Username:", member.user.tag)

  member.guild.channels.find(c => c.name === settings.welcomeChannel).send(welcomembed).catch(console.error);
};
