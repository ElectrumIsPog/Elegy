const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const punishments = require(`../../models/ModSchema`);
module.exports = {
    name: "warn",
    category: "Administration",
    aliases: ["warn"],
    cooldown: 2,
    usage: "w <user> [arg]",
    description: "Warns the provided user",
    memberpermissions: "ADMINISTRATOR",
    run: async (client, message, args, user, text, prefix) => {
        let toWarn = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
    
        if(message.author.id === toWarn.id) return;
    
        let reason = args.slice(1).join(" ")
    
        if(!reason) return message.channel.send('Provide a reason')
    
        let data = await punishments.findOne({
            GuildID: message.guild.id,
            UserID: toWarn.id
        });
    
        if(data) {
            data.Punishments.unshift({
                PunishType: 'Warn',
                Moderator: message.author.id,
                Reason: reason,
            });
            data.save();
    
            message.channel.send(`warned ${toWarn} for \`${reason}\``)
        } else if (!data) {
            let newData = new punishments({
                GuildID: message.guild.id,
                UserID: toWarn.id,
                Punishments: [{
                    PunishType: 'Warn',
                    Moderator: message.author.id,
                    Reason: reason,
                }, ],
            });
            newData.save();
            
      //      message.channel.send(`warned ${toWarn} for \`${reason}\``)
            message.channel.send(`Warned the provided user ${toWarn} for ${reason}`)
        }
        
    }
}