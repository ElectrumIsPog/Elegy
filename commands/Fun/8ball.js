const config = require("../../botconfig/config.json"); //loading config file with token and prefix, and settings
const ee = require("../../botconfig/embed.json"); //Loading all embed settings like color footertext and icon ...
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const {escapeRegex} = require("../../handlers/functions"); //Loading all needed functions

module.exports = {
    name: "8ball",
    category: "Fun",
    aliases: ["askball"],
    cooldown: 10,
    usage: "8ball <question>",
    description: "Ask the 8ball a provided question",
    run: async (client, message, args, user, text, prefix) => {
        try {
        let replies = ["Yes","No","Maybe","Not sure","Shut up you rat!","sure, why not","when you grow a braincell, yes","THAT'S A SOLID ****NO****","Nah that sucks tbh"]
        let randomized = replies[Math.floor(Math.random() * replies.length)]
        let sentence = message.content.split(" ");
        sentence.shift();
        sentence = sentence.join(" ");
        if (!sentence) message.reply("WHAT DO YOU WANT TO ASK 8BALL?")
        let embed = new Discord.MessageEmbed()
        .setTitle("8BALL")
        .addField("Your Question", `${sentence}`)
        .addField(`<:8ball:854938074857472040> 8ball`, `${randomized}`)
        .setColor("RANDOM")
        .setFooter(`Requested by ${message.author.username}`)
        message.channel.send(embed)
        } catch (e) {
            let {guild} = message;
            console.log(`Someone attemptedm to use the 8 ball command in ${guild.name} but failed to provide a question, the error has been handled`.bgYellow)
        }
    }
}