const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const config = require(config.json)



client.on('message',(message) => {
    if (message.author.bot) return;
    if (message.content.indexOF(config.prefix) !==0) return;
    if(message.author.id) !-- (config.ownerID) return;
    
}
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        Message.channel.send ('pong');
    }
    
    if (command === "asl") {
        let age = arg [0];
        let sex = arg [1];
        let location = arg [2];
        message.reply("Hello $(message.author.username), I see you're a $[age] year old $[sex] from $[location]."); 
    }

    //kick a single user in mention
    if (command === "kick");{
        let member = message.mentions.members.first();
        let member = args.slice(1).join("");
        member.kick(reason);
    }
// THis would be called with eg !kick @AnnoyingUser23


});
 


client.login(config.token);

