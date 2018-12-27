const base64 = require("js-base64").Base64;

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  const b64Decoded = base64.decode(args.join(" "));
        message.delete().catch(O_o=>{}); 
  message.channel.send(`\`\`\`\n${b64Decoded}\`\`\``);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["b64decode", "base64decode"],
  permLevel: "User"
};

exports.help = {
  name: "decode",
  category: "Fun",
  description: "Decode your encoded text",
  usage: "decode [encoded text]"
};

