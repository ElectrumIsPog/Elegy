const config = require("../../botconfig/config.json"); //loading config file with token and prefix, and settings
const ee = require("../../botconfig/embed.json"); //Loading all embed settings like color footertext and icon ...
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const {escapeRegex} = require("../../handlers/functions"); //Loading all needed functions

module.exports = {
    name: "avatar",
    category: "Infomation",
    aliases: ["av"],
    cooldown: 5,
    usage: "avatar [member]",
    run: async (client, message, args, user, text, prefix) => {
        let target = message.mentions.users.first() || message.author
        let avatar = target.displayAvatarURL({dynamic: true})
        const embed = new Discord.MessageEmbed()
        .setTitle(`${target.username}'s Avatar`)
        .setImage(avatar)
        .setColor(ee.color)
        .setFooter(`Reqested by ${message.author.username}`)
        message.channel.send(embed);
    }
}