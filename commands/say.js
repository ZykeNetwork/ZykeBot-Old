const Discord = require("discord.js");
exports.run = (client, message, args) => {
    const sayMessage = args.join(" ");
   
    message.delete().catch(O_o=>{}); 
 
        message.channel.send(sayMessage);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sayd", "sayp"],
  permLevel: "User"
};

exports.help = {
  name: "say",
  category: "Fun",
  description: "It will say that you say",
  usage: "say [text]"
};
