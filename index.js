const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {console.log('Ready!');});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name == 'general');
    let greetings = [`Welcome to our server! ${member}`, `Welcome, ${member}`, `The ancient one has arrived. Welcome, ${member}`, `${member} has joined the server. Great to have ya!`, `Sup ${member}, what it do`];

    if(!channel) return;

    channel.send(`${greetings[Math.floor(Math.random() * greetings.length)]}`);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName= args.shift().toLowerCase();

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if(!command) return;

    if(command.guildOnly && message.channel.type !== 'text') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    if(command.args && !args.length) {
        let reply = `This command requires arguments, ${message.author}`;
    
        if(command.usage) {
            reply += `\nThe proper usage would be : \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error executing the command!');
    }
});

client.login(token);

