const { Command } = require('discord.js-commando');
const { letterTrans } = require('custom-translate');
const dictionary = require('../../data/emojify');
const moment = require('moment');

module.exports = class EmojifyCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'emoci',
			group: 'grup',
			memberName: 'emoci',
			description: 'Yazıları emojiye çevirir.',
			args: [
				{
					key: 'text',
					prompt: 'Neyi emojiye çevirmemi istersin?',
					type: 'string',
					validate: text => {
						if (letterTrans(text.toLowerCase(), dictionary, ' ').length < 2000) return true;
						return 'Hatalı yazı. Bu yazı aşırı uzun.';
					},
					parse: text => text.toLowerCase()
				}
			]
		});
	}

	run(msg, { text }) {
		if (client.hasPermission("MANAGE_MESSAGES")) {
			msg.delete();
		}
		console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${msg.author.tag} (${msg.author.id}) ›› EmojifyCommand. - ${msg.guild.name}\n`);
		return msg.say(letterTrans(text, dictionary, ' '));
	}
};
