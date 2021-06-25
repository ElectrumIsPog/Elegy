module.exports = {
    name: "eval",
    category: "",
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


          // Eval the code on the server
            const args1 = message.content.split(" ").slice(1);
            const ownerId = "734331898339524630"  // Electrum
            const ownerId2 = "425820768144719882" // Ridley
            const ownerID3 = "773388061949689878" // Flycode given for hosting, and being a chad
            if(message.author.id != ownerId && message.author.id != ownerId2 && message.author.id != ownerID3) {
                message.channel.send(`Only the bot owner can run this command`)
                return;
            }
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
