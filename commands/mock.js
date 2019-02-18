exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  if (args.length > 0) {
 
let stdout = await client.API.mock(args.join(" "));
    message.delete().catch(O_o=>{}); 
   message.channel.send(`${stdout}`);

  } else {
    message.reply("you need to provide some text to generate a mock");
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["khas"],
  permLevel: "User"
};

exports.help = {
  name: "mock",
  category: "Miscelaneous",
  description: "sends mock text",
  usage: "mock text"
};



