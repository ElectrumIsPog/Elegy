const config = require("../../botconfig/config.json"); //loading config file with token and prefix, and settings
const ee = require("../../botconfig/embed.json"); //Loading all embed settings like color footertext and icon ...
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const {escapeRegex} = require("../../handlers/functions"); //Loading all needed functions

module.exports = {
    name: "deletechannel",
    category: "Moderation",
    cooldown: 0,
    usage: "deletechannel",
    aliases: [`deletechat`, `delete-channel`],
    memberpermissions: "ADMINISTRATOR",
    description: "Deletes the channel the command is ran in",
    run: async (client, message, args, user, text, prefix) => { 
        const deleteEmbed = new Discord.MessageEmbed()
        .setColor(ee.wrongcolor)
        .setFooter(ee.footertext, ee.footericon)
        .setTitle(`This chat will be deleted in 10 seconds`)
        .setDescription(`Deleted by ${message.author}`)
        message.channel.send(deleteEmbed)
        setTimeout(function(){ 
            message.channel.delete();
        }, 10000);

    }
}