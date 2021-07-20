const config = require("../../botconfig/config.json"); //loading config file with token and prefix, and settings
const ee = require("../../botconfig/embed.json"); //Loading all embed settings like color footertext and icon ...
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const {escapeRegex} = require("../../handlers/functions"); //Loading all needed functions

module.exports = { 
    name: "testban",
    category: "Moderation",
    cooldown: 0,
    usage: "ban <member>",
    minargs: 1,
    maxargs: 1,
    memberpermissions: "BAN_MEMBERS",
    description: "bans an user from the server",
    run: async (client, message, args, user, text, prefix) => {        ​
        const user = message.mentions.users.first(); // returns the user object if an user mention exists
        const banReason = args.slice(1).join(' '); // Reason of the ban (Everything behind the mention)
        ​
        // Check if an user mention exists in this message
        if (!user) {
        try {
        // Check if a valid userID has been entered instead of a Discord user mention
        if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Couldn\' get a Discord user with this userID!');
        // If the client (bot) can get a user with this userID, it overwrites the current user variable to the user object that the client fetched
        user = message.guild.members.get(args.slice(0, 1).join(' '));
        user = user.user;
        } catch (error) {
        return message.reply('Couldn\' get a Discord user with this userID!');
        }
        }
        if (user === message.author) return message.channel.send('You can\'t ban yourself'); // Check if the user mention or the entered userID is the message author himsmelf
        if (!reason) return message.reply('You forgot to enter a reason for this ban!'); // Check if a reason has been given by the message author
        if (!message.guild.member(user).bannable) return message.reply('You can\'t ban this user because you the bot has not sufficient permissions!'); // Check if the user is bannable with the bot's permissions
        ​
        await message.guild.ban(user) // Bans the user
        ​
        const Discord = require('discord.js'); // We need Discord for our next RichEmbeds
        const banConfirmationEmbed = new Discord.RichEmbed()
        .setColor('RED')
        .setDescription(`✅ ${user.tag} has been successfully banned!`);
        message.channel.send({
        embed: banConfirmationEmbed
        }); // Sends a confirmation embed that the user has been successfully banned
        
    }
}