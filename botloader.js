const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.client();
const config = require('config.json');
client.config = config;


fs.readdir(/events") (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        const event = require('events/$(file'));
        let event = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve('events/$(file)')];
    });
});

client.commands = new Enmap();

fs.readdir(''./commands/', err, files) => {
    if (err) return.console.error(err);
    files.forEach(file =>{
        if (file.endsWith('.js')) return;
        let props =  require('./commands/$(file)');
        let commandName = file.split(".")[0];
        console.log('Attempting to land command $(commandName');
        client.commands.set(commandName, props);
    });
});

client.login(config.token)