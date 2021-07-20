const config = require("../../botconfig/config.json"); //loading config file with token and prefix, and settings
const ee = require("../../botconfig/embed.json"); //Loading all embed settings like color footertext and icon ...
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const {escapeRegex} = require("../../handlers/functions"); //Loading all needed functions
module.exports = {
    name: "invite",
    category: "Information",
    aliases: ["i", "join", "invitebot", "botinvite"],
    cooldown: 4,
    usage: "invite",
    description: "Allows you to invite are amazing bot!",
    run: async (client, message, args, user, text, prefix) => {
    const embed = new Discord.MessageEmbed()
        .setTitle(`Add the bot to your server!`)
        .setColor(`GREEN`)
        .addField(`Invite`, `You can add me [here](https://discord.com/oauth2/authorize?client_id=857775470279000085&scope=bot&permissions=8)!`)
        .setFooter(`Reqested by ${message.author.username}`, ee.footericon)
        .setThumbnail(`https://i.pinimg.com/originals/98/c7/fa/98c7fa22d316ea049d14fccf39b6b7f6.png1`)
        message.channel.send(embed);
    }
}