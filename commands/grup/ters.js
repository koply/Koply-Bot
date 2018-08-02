const { Command } = require('discord.js-commando');

module.exports = class ReverseCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ters',
			group: 'grup',
			memberName: 'ters',
			description: 'Yazdığınız cümleyi ters çevirir.',
			args: [
				{
					key: 'text',
					prompt: 'Neyi ters çevirmek istersiniz?',
					type: 'string'
				}
			]
		});
	}

	run(msg, { text }) {
		return msg.say(text.split('').reverse().join(''));
	}
};
