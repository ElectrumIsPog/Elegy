const { MessageEmbed } = require("discord.js");
const mongoose = require("mongoose");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const punishments = require(`../../models/ModSchema`);
module.exports = {
    name: "warns",
    category: "Administration",
    aliases: ["warnings"],
    cooldown: 2,
    usage: "warn <user> [arg]",
    description: "Warns the provided user",
    memberpermissions: "ADMINISTRATOR",
    run: async (client, message, args, user, text, prefix) => {
       const {member, mentions, guild} = message
       let checkWarns = mentions.users.first().id       
       const warns = await punishments.find({UserID: `${checkWarns}`, GuildID: `${message.guild.id}`})
       if (!warns) {
           message.channel.send(`test`)
           return;
       }
       console.log(warns)
       message.channel.send(`${}`)
    }
}