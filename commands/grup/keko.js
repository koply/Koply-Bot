const { Command } = require('discord.js-commando');
const moment = require('moment');

module.exports = class MockingCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'keko',
			group: 'grup',
			memberName: 'keko',
			description: 'YaZıNıZ bUNuN gİbİ OlUr',
			clientPermissions: ['USE_EXTERNAL_EMOJIS'],
			args: [
				{
					key: 'text',
					prompt: 'NeYi BöYlE YaPmAk İsTeRsİnİz?',
					type: 'string',
					max: 1950,
					parse: text => text.toLowerCase().split('')
				}
			]
		});
	}

	run(msg, { text }) {
		if (client.hasPermission("MANAGE_MESSAGES")) {
			msg.delete();
		}
		for (let i = 0; i < text.length; i += Math.floor(Math.random() * 4)) text[i] = text[i].toUpperCase();
		console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${msg.author.tag} (${msg.author.id}) ›› Keko. - ${msg.guild.name}\n`);
		return msg.say(`${text.join('')} <:thonk:442582219148623892>`);
	}
	

};

