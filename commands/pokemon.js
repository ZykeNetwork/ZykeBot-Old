const pokemon = require("./pokemon.json");
const Discord = require("discord.js");


exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
const rand = Math.floor(Math.random() * 802);
    const poke = rand > 0 ? rand : Math.floor(Math.random() * 802);
    const pokem = pokemon[poke];
	const user = message.author;
	let score = client.getScore.get(message.author.id, message.guild.id);

  const pointsToAdd = parseInt("5", 10);
  let userscore = client.getScore.get(user.id, message.guild.id);
  if (!userscore) {
    userscore = { id: `${message.guild.id}-${user.id}`, user: user.id, guild: message.guild.id, points: 0, level: 1 }
  }
  userscore.points += pointsToAdd;
 
  let userLevel = Math.floor(0.1 * Math.sqrt(score.points));
  userscore.level = userLevel;
 
 let bembed = new Discord.RichEmbed()
       .setTitle("You have 15 seconds to guess ! Who's that Pokémon !")
      .setImage(pokem.imageURL)
      .setColor(6192321);

         
    const msg = await message.channel.send(bembed);
    const filter = m => m.author.id === message.author.id;
    const attempts = await msg.channel.awaitMessages(filter, { time: 15000, max: 1 });
      
    if (!attempts || !attempts.size) {
      msg.delete();
      return message.channel.send(`U Lazy or maybe googling! You took too long to answer. It was ${pokem.name}.`);
    } 
      
    const answer = attempts.first().content.toLowerCase();  
      
    if (answer === pokem.name.toLowerCase()) {
		  
  client.setScore.run(userscore);

      await msg.edit({bembed: null});
      return msg.channel.send(`Wala Habibi! Well done, ${pokem.name} was correct and you earn **5 Points**.`);
    }
    await msg.edit({bembed: null});
    return msg.channel.send(`U Lazy or maybe stupid! You answered incorrectly, It was **${pokem.name}.**`);
  } 
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pokmon", "guessthatpokemon"],
  permLevel: "User"
};

exports.help = {
  name: "pokemon",
  category: "Image",
  description: "Guess That Pokemon",
  usage: "pokemon @mention"
};


