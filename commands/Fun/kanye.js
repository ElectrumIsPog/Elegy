const config = require("../../botconfig/config.json"); //loading config file with token and prefix, and settings
const ee = require("../../botconfig/embed.json"); //Loading all embed settings like color footertext and icon ...
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const {escapeRegex} = require("../../handlers/functions"); //Loading all needed functions
const axios = require('axios').default // This is the API used for making request to the Covid Website

module.exports = {
    name: "kanye",
    category: "Fun",
    aliases: ["kanyequote"],
    cooldown: 5,
    usage: "kanye",
    run: async (client, message, args, user, text, prefix) => {
        let options = {
            method: 'GET',
            url: 'http://api.kanye.rest/',
          };
          axios.request(options).then(response => {
              console.log(`${response.data.quote}`);
              const quote = response.data.quote
            //   const embed = new Discord.MessageEmbed()
            //   .setTitle(`A dad joke`)
            //   .setDescription(`${quote}`)
            //   .setColor(ee.color)
            //   .setFooter(`Requested by ${message.author.username} | ID: ${}`, ee.footericon)
              message.reply(`${quote}`)
          }).catch(error => {
              console.error(error);
              message.channel.send(`The api seems to be down ):`)
          });
    }
}