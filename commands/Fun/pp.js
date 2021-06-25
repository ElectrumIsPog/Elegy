const config = require("../../botconfig/config.json"); //loading config file with token and prefix, and settings
const ee = require("../../botconfig/embed.json"); //Loading all embed settings like color footertext and icon ...
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const {escapeRegex} = require("../../handlers/functions"); //Loading all needed functions
module.exports = {
    name: "pp",
    category: "Fun",
    aliases: ["ppsize"],
    cooldown: 10,
    usage: "pp [member]",
    description: "Checks the penis of the provided user",
    run: async (client, message, args, user, text, prefix) => {
        let randomPPs = [`8=D`, `8==D`, `8=====D`, `8=======D`, `8===D`, `8=========D`, `8D`]
        let person = message.mentions.users.first() || message.author
        let PPs = [`${randomPPs[Math.floor(Math.random() * randomPPs.length)]}`]
    
        let ppembed = new Discord.MessageEmbed()
        .setTitle('`PP Size Machine`')
        .addField(`${person.username}'s Dick`, `${PPs}`, false)
        .setFooter(`Requested by ${message.author.username}`)
        message.channel.send(ppembed)
    }
}