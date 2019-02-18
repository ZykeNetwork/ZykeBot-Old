 const Discord = require("discord.js");
 exports.run = async (client, message, args) => {
 if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry. You don't have permissions to kick people.");
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role than me? Do I have kick permissions?");
    
    

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a kick!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry. I couldn't kick because of : ${error}`));
	  var sayings = [ 'https://media.giphy.com/media/l0GtHKNRABmEA1rTa/giphy.gif ',
                    'https://media.giphy.com/media/u2LJ0n4lx6jF6/giphy.gif',
                    'https://media.giphy.com/media/l2QE2CQyK2ZyVEGJy/source.gif' ,
                    'https://media.giphy.com/media/l3V0j3ytFyGHqiV7W/giphy.gif',
                    'https://media.giphy.com/media/l41YigyTvRbquosik/giphy.gif',
                    'https://media.giphy.com/media/P3x1oqza891SM/giphy.gif',
                    'https://media.giphy.com/media/3oriNOXmaxj8czSHMQ/giphy.gif'
        ];
 

        var result = Math.floor((Math.random() * sayings.length) + 0);
	  let ballembed = new Discord.RichEmbed()
        .setColor("#FF5600")
        .addField("User Kicked", `${member.user.username}`)
        .addField("Kicked By", `${message.author.username}`)
		.addField("Reason", `${reason}`)
		.setImage(sayings[result]);
		
        message.channel.send(ballembed);

  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["getaway"],
  permLevel: "Administrator"
};

exports.help = {
  name: "kick",
  category: "System",
  description: "Kick Someone",
  usage: "kick @user [reason]"
};

