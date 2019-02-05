const pokemon = require("./pokemon.json");
const Discord = require("discord.js");


exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
const rand = Math.floor(Math.random() * 802);
    const poke = rand > 0 ? rand : Math.floor(Math.random() * 802);
    const pokem = pokemon[poke];
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
      await msg.edit({bembed: null});
      return msg.channel.send(`Wala Habibi! Well done, ${pokem.name} was correct.`);
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


