const config = require("../../botconfig/config.json"); //loading config file with token and prefix, and settings
const ee = require("../../botconfig/embed.json"); //Loading all embed settings like color footertext and icon ...
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const {escapeRegex} = require("../../handlers/functions"); //Loading all needed functions
const axios = require('axios').default // This is the API used for making request to the Covid Website

module.exports = {
    name: "dadjoke",
    category: "Fun",
    aliases: ["daddy"],
    cooldown: 5,
    usage: "dadjoke",
    run: async (client, message, args, user, text, prefix) => {
        let options = {
            method: 'GET',
            url: 'https://icanhazdadjoke.com',
            headers: {
               'Accept': `application/json`,
            }
          };
          
          axios.request(options).then(response => {
              console.log(`Got a dad joke: ${response.data.joke} ID: ${response.data.id}`);
              const joke = response.data.joke
              const id = response.data.id
              const embed = new Discord.MessageEmbed()
              .setTitle(`A dad joke`)
              .setDescription(`${joke}`)
              .setColor(ee.color)
              .setFooter(`Requested by ${message.author.username} | ID: ${id}`, ee.footericon)
              message.channel.send(embed)
          }).catch(error => {
              console.error(error);
              message.channel.send(`The api seems to be down ):`)
          });
    }
}