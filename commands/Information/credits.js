const config = require("../../botconfig/config.json"); //loading config file with token and prefix, and settings
const ee = require("../../botconfig/embed.json"); //Loading all embed settings like color footertext and icon ...
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const {escapeRegex} = require("../../handlers/functions"); //Loading all needed functions

module.exports = {
    name: "credits",
    category: "Information",
    aliases: ["git"],
    cooldown: 0,
    usage: "credits",
    run: async (client, message, args, user, text, prefix) => { 
        let creditsEmbed = new Discord.MessageEmbed()
        .setFooter(ee.footertext, ee.footericon)
        .setTitle(`Credits list`)
        .addField(`Main devloper`, `Electrum`)
        .setColor(ee.color,)
        .addField(`Contributors`, `Nickk & Dobro bot - A few fun commands\nTomato - Assisting in recoding help command\n Cow - Fixing dog command\n You! ${message.author.username} - for being a cool person!`)
        message.channel.send(creditsEmbed)
    }
}