exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  var emoji = "";
  var winOrLose = 0;
  if (args.length === 0) {
    return message.reply("you need to choose whether you want to be rock, paper, or scissors!");
  } else if (args[0] !== "rock" && args[0] !== "paper" && args[0] !== "scissors") {
    return message.reply("you need to choose whether you want to be rock, paper, or scissors!");
  } else {
    var sayings = [ 'scissors',
                    'paper',
                    'rock'
        ];
 

     var result = Math.floor((Math.random() * sayings.length) + 0);
    if (sayings[result] === "rock") {
      emoji = "✊";
      if (args[0].toLowerCase() === "paper") {
        winOrLose = 1;
      }
    }
    if (sayings[result] === "paper") {
      emoji = "✋";
      if (args[0].toLowerCase() === "scissors") {
        winOrLose = 1;
      }
    }
    if (sayings[result] === "scissors") {
      emoji = "✌";
      if (args[0].toLowerCase() === "rock") {
        winOrLose = 1;
      }
    }
    if (args[0].toLowerCase() !== sayings[result]) {
      message.channel.send(`${emoji} I chose ${sayings[result]}. ${winOrLose ? "You win!" : "You lose!"}`);
    } else {
      message.channel.send(`${emoji} I chose ${sayings[result]} It's a tie!`);
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rockpaperscissors"],
  permLevel: "User"
};

exports.help = {
  name: "rps",
  category: "Fun",
  description: "Rock Paper Scissor Game",
  usage: "rps [your-pick]"
};


