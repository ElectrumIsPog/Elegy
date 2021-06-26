const config = require("../../botconfig/config.json"); //loading config file with token and prefix, and settings
const ee = require("../../botconfig/embed.json"); //Loading all embed settings like color footertext and icon ...
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const {escapeRegex} = require("../../handlers/functions"); //Loading all needed functions
const axios = require('axios') // This is the API used for making request to the cat Website

module.exports = {
    name: "cat",
    category: "Fun",
    aliases: ["dogbutnotdog"],
    cooldown: 5,
    usage: "cat",
    description: "Gives you a nice pussy",
    run: async (client, message, args, user, text, prefix) => {
        axios 
        .get(`https://api.thecatapi.com/v1/images/search`)
        .then((res) => {
            console.log('RES:', res.data[0].url)
            const catEmbed = new Discord.MessageEmbed()
            .setTitle(`A cute little cat`)
            .setFooter(`Requested by ${message.author.username}`, ee.footericon)
            .setColor(`RED`)
            .setImage(res.data[0].url)
            message.reply(catEmbed)
        })
        .catch((err) => {
            console.error('ERR:', err)
          })
      }
    }