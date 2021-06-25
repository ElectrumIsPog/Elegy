const config = require("../../botconfig/config.json"); //loading config file with token and prefix, and settings
const ee = require("../../botconfig/embed.json"); //Loading all embed settings like color footertext and icon ...
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const {escapeRegex} = require("../../handlers/functions"); //Loading all needed functions

module.exports = {
    name: "howgay",
    category: "Fun",
    aliases: ["gaycheck"],
    cooldown: 10,
    usage: "howgay [member]",
    description: "Test an user to see how gay they are",

    run: async (client, message, args, user, text, prefix) => {
        let member = message.mentions.users.first() || message.author
        let gayness = Math.floor(Math.random() * 101);

        const howgayembed = new Discord.MessageEmbed()
        .setTitle(`Gay Machine Calculator`)
        .setDescription(`${member.username} is ` + gayness + "% Gay🌈")
        .setColor("GREEN")
        .setFooter(`Requested by ${message.author.username}`)
        message.channel.send(howgayembed);
    }
}