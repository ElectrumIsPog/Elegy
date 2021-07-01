const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "help",
    category: "Information",
    aliases: ["h", "commandinfo", "cmds", "cmd"],
    cooldown: 4,
    usage: "help [Command]",
    description: "Returns all Commmands, or one specific command",
    run: async (client, message, args, user, text, prefix) => {
    try {
        if (args[0]) {
          const embed = new MessageEmbed();
          const cmd = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()));
          if (!cmd) {
              return message.channel.send(embed.setColor(ee.wrongcolor).setDescription(`No Information found for command **${args[0].toLowerCase()}**`));
          }
          if (cmd.name) embed.addField("**Command name**", `\`${cmd.name}\``);
          if (cmd.name) embed.setTitle(`Detailed Information about:\`${cmd.name}\``);
          if (cmd.description) embed.addField("**Description**", `\`${cmd.description}\``);
          if (cmd.aliases) embed.addField("**Aliases**", `\`${cmd.aliases.map((a) => `${a}`).join("`, `")}\``);
          if (cmd.cooldown) embed.addField("**Cooldown**", `\`${cmd.cooldown} Seconds\``);
          else embed.addField("**Cooldown**", `\`1 Second\``);
          if (cmd.usage) {
              embed.addField("**Usage**", `\`${config.prefix}${cmd.usage}\``);
              embed.setFooter("Syntax: <> = required, [] = optional");
          }
          if (cmd.useage) {
              embed.addField("**Useage**", `\`${config.prefix}${cmd.useage}\``);
              embed.setFooter("Syntax: <> = required, [] = optional");
          }
          return message.channel.send(embed.setColor(ee.color));
        } else {
          const embed = new MessageEmbed()
              .setColor(ee.color)
              .setThumbnail(client.user.displayAvatarURL())
              .setTitle("HELP MENU 🔰 Commands")
              .setFooter(`To see command descriptions and inforamtion, type: ${config.prefix}help [CMD NAME]`, client.user.displayAvatarURL());
          const commands = (category) => {
              return client.commands.filter((cmd) => cmd.category === category).map((cmd) => `\`${cmd.name}\``);
          };
          try {
            let completearray = []
            for (let i = 0; i < client.categories.length; i += 1) {
              const current = client.categories[i];
              const items = commands(current);
              let data = {
                title: `**${current.toUpperCase()} [${items.length}]**`,
                value: `> ${items.join(", ")}`
              }
              completearray.push(data)
            }

//            console.log(completearray)

            swap_pages(message, completearray, "HELP MENU 🔰 Commands", ["⬅️", "⏹", "➡️"], 3)

          } catch (e) {
              console.log(String(e.stack).red);
          }
        }
        
      async function swap_pages(message, desc, TITLE, reactionemojis = ["⬅️", "⏹", "➡️"], sliceamount = 15) {
        if(!message || !message.client) throw "No message with a valid client added"
        //counter variable
        let currentPage = 0;
        //GET ALL EMBEDS
        let embeds = [];
        //if input is an array
        try {
          let arraysliceamount = sliceamount ? sliceamount : 15; 
          let k = arraysliceamount;
          for (let i = 0; i < desc.length; i += arraysliceamount) {
            const current = desc.slice(i, k);
            k += arraysliceamount;
            const embed = new MessageEmbed()
              .setTitle(TITLE)
              .setColor(ee.color)
              .setFooter(ee.footertext, ee.footericon)
            for(const i of current){
              embed.addField(i.title, i.value)
            }
            embeds.push(embed);
          }
        } catch {}
        if (embeds.length === 1) return message.channel.send(embeds[0]).catch(e => console.log("THIS IS TO PREVENT A CRASH"))
        const queueEmbed = await message.channel.send(
          `**Current Page - ${currentPage + 1}/${embeds.length}**`,
          embeds[currentPage]
        ).catch(e => console.log("THIS IS TO PREVENT A CRASH"))
        try {
          for (const emoji of reactionemojis)
            await queueEmbed.react(emoji);
        } catch {}
        const filter = (reaction, user) =>
          (reactionemojis.includes(reaction.emoji.name) || reactionemojis.includes(reaction.emoji.name)) && message.author.id === user.id;
        const collector = queueEmbed.createReactionCollector(filter, {
          time: 90000
        });

        collector.on("collect", async (reaction, user) => {
          try {
            if (reaction.emoji.name === reactionemojis[2] || reaction.emoji.id === reactionemojis[2]) {
              if (currentPage < embeds.length - 1) {
                currentPage++;
                queueEmbed.edit(`**Current Page - ${currentPage + 1}/${embeds.length}**`,{content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embed: embeds[currentPage]});
              } else {
                currentPage = 0
                queueEmbed.edit(`**Current Page - ${currentPage + 1}/${embeds.length}**`,{content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embed: embeds[currentPage]});
              }
            } else if (reaction.emoji.name === reactionemojis[0] || reaction.emoji.id === reactionemojis[0]) {
              if (currentPage !== 0) {
                --currentPage;
                queueEmbed.edit(`**Current Page - ${currentPage + 1}/${embeds.length}**`,{content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embed: embeds[currentPage]});
              } else {
                currentPage = embeds.length - 1
                queueEmbed.edit(`**Current Page - ${currentPage + 1}/${embeds.length}**`,{content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embed: embeds[currentPage]});
              }
            } else {
              collector.stop();
              reaction.message.reactions.removeAll();
            }
            await reaction.users.remove(message.author.id);
          } catch {}
        });
      }
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}