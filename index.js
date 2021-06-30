//Importing all needed Commands
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const colors = require("colors"); //this Package is used, to change the colors of our Console! (optional and doesnt effect performance)
const fs = require("fs"); //this package is for reading files and getting their inputs
const mongoose = require(`mongoose`)
//Creating the Discord.js Client for This Bot with some default settings ;) and with partials, so you can fetch OLD messages
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  disableEveryone: true,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
//Client variables to use everywhere
client.commands = new Discord.Collection(); //an collection (like a digital map(database)) for all your commands
client.aliases = new Discord.Collection(); //an collection for all your command-aliases
client.categories = fs.readdirSync("./commands/"); //categories
client.cooldowns = new Discord.Collection(); //an collection for cooldown commands of each user

//defining all files 2 be loaded in ./handlers
client.handlers = ["command", "events", "database"];
//Loading files, with the client variable like Command Handler, Event Handler, ...
function handlers(){
  client.handlers.forEach(handler => {
      require(`./handlers/${handler}`)(client);
  });
}; handlers();
module.exports.handlers = handlers;
//the system for loading the cmds is needed for reloadbot

//login into the bot
client.login(require("./botconfig/config.json").token);
