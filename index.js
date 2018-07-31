const { CommandoClient, SQLiteProvider } = require('discord.js-commando');
const Discord = require('discord.js');
const path = require('path');
const sqlite = require('sqlite');

const config = require('./data/config.json');

class kofliClient extends CommandoClient {
	constructor(options) {
		  super(options);
		  	this.config = require('./data/config.json');
	}
}

global.client = new kofliClient({
    commandPrefix: config.prefix,
    unknownCommandResponse: false,
    owner: config.owner,
    disableEveryone: false,
    fetchAllMembers: true
});

sqlite.open(path.join(__dirname, "settings.sqlite3")).then((db) => {
    client.setProvider(new SQLiteProvider(db));
});


client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['grup', 'Ana komutlar.'],
        ['bilgilendirme', 'Bilgi almak için kullanılan komutlar.'],
		['lilmoderation', 'Modere için kullanılan komutlar'],
        ['ayarlar', 'Ayarlar'],
        ['admin', 'Special command for bot owner.']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Launching Koply v2');
	console.log('Koply v2 launched.')
    client.user.setActivity(config.aktif);
});

client.login(config.token);