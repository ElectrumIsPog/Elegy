const config = require("../../botconfig/config.json"); //loading config file with token and prefix, and settings
const ee = require("../../botconfig/embed.json"); //Loading all embed settings like color footertext and icon ...
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const {escapeRegex} = require("../../handlers/functions"); //Loading all needed functions
const axios = require('axios').default // This is the API used for making request to the Covid Website

module.exports = {
    name: "covid",
    category: "Information",
    aliases: ["covidstats"],
    cooldown: 5,
    usage: "covidstats",
    run: async (client, message, args, user, text, prefix) => {
        message.channel.send(`An error has been, something is DEEPLY wrong if you see this message. (3)`)
        
    }  
}