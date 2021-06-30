const config = require("../../botconfig/config.json"); //loading config file with token and prefix, and settings
const ee = require("../../botconfig/embed.json"); //Loading all embed settings like color footertext and icon ...
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const {escapeRegex} = require("../../handlers/functions"); //Loading all needed functions

module.exports = { 
    name: "kick",
    category: "Moderation",
    cooldown: 0,
    usage: "kick <member>",
    minargs: 1,
    maxargs: 1,
    memberpermissions: "KICK_MEMBERS",
    description: "Kicks an user from the server",
    run: async (client, message, args, user, text, prefix) => {
        const {member, mentions } = message
        const tag = `<@${member.id}>`
        const target = mentions.users.first()
        const msg = message
        const { guild } = message
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id) 
            const embed = new Discord.MessageEmbed()            
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`${target.username} has been kicked from ${guild.name}`)
            .setDescription(`Kicked by ${message.author}`)
            message.channel.send(embed)
            targetMember.kick() 
           // message.channel.send(`${targetMember} would have been kicked, but DEBUG mode is on.`)
        } else {
            
        }
    }
}