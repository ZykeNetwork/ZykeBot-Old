
module.exports = (client, member) => {
  const settings = client.getSettings(member.guild.id);

  if (settings.welcomeEnabled !== "true") return;

  const welcomeMessage = settings.welcomeMessage.replace("{{user}}", `${member}`);
  const welcomeMessage = settings.welcomeMessage.replace("{{server}}", `${member.guild.name}`);
  const welcomeMessage = settings.welcomeMessage.replace("{{memberCount}}", `${member.guild.memberCount}`);

  member.guild.channels.find(c => c.name === settings.welcomeChannel).send(welcomeMessage).catch(console.error);
};
