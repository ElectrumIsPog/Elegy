const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!


module.exports = {
    name: "nigger",
    category: "",
    aliases: ["monkey", "kfc-lover", "cow"],
    cooldown: 1,
    usage: "nigger",
    description: "Ask the 8ball a provided question", 
    run: async (client, message, args, user, text, prefix) => {
        let niggers = [`https://i.pinimg.com/originals/74/3d/ae/743dae5683f45ea6eae94e5ee30db253.jpg`,`https://i.pinimg.com/originals/ea/fa/a5/eafaa558e8a22e6b2e456fcc7a0b38d8.jpg`,`https://upload.wikimedia.org/wikipedia/commons/1/11/Faizon_Love_at_Porn_Star_Karaoke.jpg`,`https://i.ytimg.com/vi/vxMcjxpWUlg/maxresdefault.jpg`,`https://i.ytimg.com/vi/vxMcjxpWUlg/maxresdefault.jpg`]
        let randomized = niggers[Math.floor(Math.random() * niggers.length)]
        const niggerEmbed = new Discord.MessageEmbed()
        .setTitle(`The nigger you requested, master.`)
        .setColor(`BROWN`)
        .setImage(`${randomized}`)
        .setFooter(`Requested by ${message.author.username}`)
        message.channel.send(niggerEmbed)
    }
}   