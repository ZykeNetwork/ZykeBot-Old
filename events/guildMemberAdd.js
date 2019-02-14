const Discord = require("discord.js");
module.exports = async (client, member) => {
  const settings = client.getSettings(member.guild.id);

    if (settings.welcomeEnabled !== "true") return;
	    const channel = member.guild.channels.find("name", settings.welcomeChannel);
		    if (!channel) return;
  if (settings.WelcomeType !== "text") {
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
  .addField("Full Username:", member.user.tag);
        channel.send(welcomembed).catch(console.error);
  }
      if (settings.WelcomeType === "image") {
		  let welcomeimage = await client.API.welcome("anime", member.user.bot, member.user.avatarURL, member.user.tag, member.user.tag,`${member.guild.name}#${member.guild.memberCount}`);
        channel.send({
          files: [{
            attachment: welcomeimage,
            name: "welcome.png"
          }]
        }).catch(console.error);

}

};
