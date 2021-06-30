const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const punishments = require(`../../models/ModSchema`);
module.exports = {
    name: "warnnings",
    category: "Administration",
    aliases: ["warn"],
    cooldown: 2,
    usage: "warn <user> [arg]",
    description: "Warns the provided user",
    memberpermissions: "ADMINISTRATOR",

}