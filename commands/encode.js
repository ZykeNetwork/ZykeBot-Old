const base64 = require("js-base64").Base64;

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  const b64Encoded = base64.encode(args.join(" "));
      message.delete().catch(O_o=>{}); 
  message.channel.send(`\`\`\`\n${b64Encoded}\`\`\``);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["b64", "b64encode", "base64", "base64encode"],
  permLevel: "User"
};

exports.help = {
  name: "encode",
  category: "Fun",
  description: "encode your text",
  usage: "encode [text to encode]"
};

