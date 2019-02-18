const Discord = require("discord.js");
let giveMeAJoke = require('give-me-a-joke');;

exports.run = async (message, args) => {    giveMeAJoke.getRandomCNJoke(function(joke){
        message.channel.send(joke)
    })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tellmeajoke"],
  permLevel: "User"
};

exports.help = {
  name: "joke",
  category: "Fun",
  description: "A Random Joke.",
  usage: "joke"
};

