exports.run = async (client, message, args) => {
const toDelete = parseInt(args[0], 10);
    
    if(!toDelete || toDelete < 2 || toDelete > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    const fetched = await message.channel.fetchMessages({limit: toDelete});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`I'm not able to delete messages because: ${error}`));
  }
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["clean"],
  permLevel: "User"
};

exports.help = {
  name: "purge",
  category: "Moderation",
  description: "purge messages at bulk",
  usage: "purge 2-100"
};

