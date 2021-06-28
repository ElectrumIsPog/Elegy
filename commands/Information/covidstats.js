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
        let options = {
            method: 'GET',
            url: 'https://covid-19-data.p.rapidapi.com/report/totals',
            params: {date: '26-06-2021', 'date-format': 'DD-MM-YYYY'},
            headers: {
               'x-rapidapi-key': `${config.rapidapi}`,
              'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(response => {
              message.channel.send(`This command is currently disabled`)
              console.log(response.data);
          }).catch(error => {
              console.error(error);
          });
    }
}