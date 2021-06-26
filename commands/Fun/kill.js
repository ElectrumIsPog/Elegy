const config = require("../../botconfig/config.json"); //loading config file with token and prefix, and settings
const ee = require("../../botconfig/embed.json"); //Loading all embed settings like color footertext and icon ...
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const {escapeRegex} = require("../../handlers/functions"); //Loading all needed functions

module.exports = {
    name: "kill",
    category: "Fun",
    aliases: ["murder"],
    cooldown: 10,
    usage: "kill [member]",
    description: "Kills the provided user",
    run: async (client, message, args, user, text, prefix) => {
        let killed = message.mentions.users.first();

        if (!user) {
          return message.channel.send(`${message.author} killed himself.`);
        }
    
        let killmessages = [`${killed} fell to their death`, `${killed} trips over his own shoe laces and dies.`, `${killed} choked to death on a fly when walking his lizard at the pool`, `${killed} got impaled by a pencil`, `${killed} trips over his own shoe laces and dies`, `${killed} dies from dabbing too hard`];
        const murderembed = new Discord.MessageEmbed()
        .setTitle(`${killed.username} was murdered!`)
        .setDescription(killmessages[Math.floor(Math.random() * killmessages.length)])
        .setFooter(`Murdered by ${message.author.username}`, ee.footericon)
        .setColor(`RED`)
    
        message.channel.send(murderembed);

    }
}