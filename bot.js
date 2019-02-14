
if (Number(process.version.slice(1).split(".")[0]) < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");
const Idiot = require("idiotic-api");
const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
const SQLite = require("better-sqlite3");
const sql = new SQLite('./assets/data/scores.sqlite');

const client = new Discord.Client();
// Check if the table "points" exists.
  const table = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'scores';").get();
  if (!table['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE scores (id TEXT PRIMARY KEY, user TEXT, guild TEXT, points INTEGER, level INTEGER);").run();
    // Ensure that the "id" row is always unique and indexed.
    sql.prepare("CREATE UNIQUE INDEX idx_scores_id ON scores (id);").run();
    sql.pragma("synchronous = 1");
    sql.pragma("journal_mode = wal");
  }
client.config = require("./config.js");

client.logger = require("./modules/Logger");

require("./modules/functions.js")(client);
client.getScore = sql.prepare("SELECT * FROM scores WHERE user = ? AND guild = ?");
client.setScore = sql.prepare("INSERT OR REPLACE INTO scores (id, user, guild, points, level) VALUES (@id, @user, @guild, @points, @level);");
client.commands = new Enmap();
client.aliases = new Enmap();

client.settings = new Enmap({name: "settings"});
client.API = new Idiot.Client(client.config.IAPIToken, { dev: true });
client.queue = new Enmap();
client.top10 = sql.prepare("SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 10;");

const init = async () => {

  const cmdFiles = await readdir("./commands/");
  client.logger.log(`Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });

  const evtFiles = await readdir("./events/");
  client.logger.log(`Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    client.logger.log(`Loading Event: ${eventName}`);
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
  });

  client.levelCache = {};
  for (let i = 0; i < client.config.permLevels.length; i++) {
    const thisLevel = client.config.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;
  }

  client.login(client.config.token);

};

init();
