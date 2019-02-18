exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  await message.reply("Bot is restarting.");
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  });
  process.exit(1);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Support"
};

exports.help = {
  name: "reboot",
  category: "System",
  description: "Shuts down the bot & restart automatically.",
  usage: "reboot"
};
