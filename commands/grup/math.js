const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const math = require('mathjs');
const moment = require('moment');

module.exports = class MathCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'math',
            group: 'grup',
            memberName: 'math',
            description: 'Matematik işlemleri yapabilirsiniz.',
            args: [
                {
                    key: 'mat',
                    prompt: 'Yapılacak işlemi girin.',
                    type: 'string'
                }
            ]
        });    
    }

    run(msg, args) {
		try {
			const evaluated = math.eval(args.mat).toString();
			msg.reply(evaluated).catch(() => msg.reply('Hatalı kullanım.'));
		} catch (err) {
			msg.reply('Hatalı kullanım.');
		}
		
		console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${msg.author.tag} (${msg.author.id}) ›› Math. - ${msg.guild.name}\n`);
    }
};