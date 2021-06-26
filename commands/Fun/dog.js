const config = require("../../botconfig/config.json"); //loading config file with token and prefix, and settings
const ee = require("../../botconfig/embed.json"); //Loading all embed settings like color footertext and icon ...
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const {escapeRegex} = require("../../handlers/functions"); //Loading all needed functions
const axios = require('axios') // This is the API used for making request to the dog Website


module.exports = {
    name: "dog",
    category: "Fun",
    aliases: ["dogs"],
    cooldown: 5,
    usage: "dog",
    description: "Gives you a dog",
    run: async (client, message, args, user, text, prefix) => {
        axios 
        .get(`https://dog.ceo/api/breeds/image/random`)
        .then((res) => {
            console.log('RES:', res.data.message)
            const dogEmbed = new Discord.MessageEmbed()
            .setTitle(`A cute little dog`)
            .setFooter(`Requested by ${message.author.username}`, ee.footericon)
            .setColor(`RED`)
            .setImage(res.data.message)
            message.reply(dogEmbed)
        })
        .catch((err) => {
            console.error('ERR:', err)
            message.channel.send(`Something went wrong, please report this to devloper.`)
          })
      }
    }