module.exports = (client, message) => {
    //ignore all bots
    if (message.autor.bot) return;

    //Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !==0) return;

    // Our standard arguement/command name definition.
    const args= message.content.slice(client.config.prefix.length).trim().split(/+/g);
    const command = args.shift().toLowerCase();

    //Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);

    //If that command doesn't exist, sliently exit and do nothing
    if (!cmd) return;

    //Run the command
    cmd.run(client, message, args);
};