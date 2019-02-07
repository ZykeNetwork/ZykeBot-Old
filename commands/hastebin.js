const hastebin = require('hastebin-gen');

exports.run = (bot, msg, args) => {

     let haste = args.slice(0).join(" ")

        let type = args.slice(1).join(" ")

        if (!args[0]) { return msg.channel.send("What do you want to post in Hastebin?") }

        hastebin(haste).then(r => {

            msg.channel.send("`Posted to Hastebin at this URL:`  " + r);

        }).catch(console.error);

        msg.delete();

}        
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hb"],
  permLevel: "User"
};

exports.help = {
  name: "hastebin",
  category: "Tools",
  description: "Paste something to hastebin",
  usage: "hastebin thing you want me to post"
};

