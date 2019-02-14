const Discord = require("discord.js");
module.exports = async (client, member) => {
  const settings = client.getSettings(member.guild.id);
if (settings.leaveEnabled !== "true") return;

 let leaveembed = await client.API.goodbye("gearz", member.user.bot, member.user.avatarURL, member.user.tag, member.user.tag,`${member.guild.name}#${member.guild.memberCount}`);

  member.guild.channels.find(c => c.name === settings.leaveChannel).send({
          files: [{
            attachment: leaveembed,
            name: "byeye.png"
          }]
        }).catch(console.error);
};
