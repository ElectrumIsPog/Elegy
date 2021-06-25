const config = require("../../botconfig/config.json"); //loading config file with token and prefix, and settings
const ee = require("../../botconfig/embed.json"); //Loading all embed settings like color footertext and icon ...
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const {escapeRegex} = require("../../handlers/functions"); //Loading all needed functions

module.exports = {
    name: "eval",
    category: "Owner",
    aliases: ["ev"],
    cooldown: 2,
    usage: "eval <code>",
    description: "A bot owner only command",
    run: async (client, message, args, user, text, prefix) => {
           // Clean the code, make sure the eval command can run it
           function clean(text) {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
          }
            const args1 = message.content.split(" ").slice(1);
            const ownerId = "1"
            const ownerId2 = "425820768144719882"
            const ownerID3 = "773388061949689878"
            if(message.author.id != ownerId && message.author.id != ownerId2 && message.author.id != ownerID3) {
              message.channel.send(new Discord.MessageEmbed()
              .setColor(ee.wrongcolor)
              .setFooter(ee.footertext, ee.footericon)
              .setTitle("❌ Error | You are not allowed to run this command!")
              .setDescription(`You need these permissions: BOT_OWNER`)
            ).then(msg=>msg.delete({timeout: 5000}).catch(e=>console.log("Couldn't Delete --> Ignore".gray)));
            return;}


            try {
                const code = args1.join(" ");
                let evaled = eval(code);
           
                if (typeof evaled !== "string")
                  evaled = require("util").inspect(evaled);
           
                message.channel.send(clean(evaled), {code:"xl"});
              } catch (err) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
              }

         } 
    }
