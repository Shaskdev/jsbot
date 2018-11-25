exports.run = (client, message, args) => [
    message.channel.send('pong!').catch(console.erroer);
]