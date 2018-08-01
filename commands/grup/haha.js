const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const moment = require('moment');

module.exports = class hahaCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'haha',
            group: 'grup',
            memberName: 'haha',
            description: 'Aahhahha.'
        });    
    }

    run(msg) {
		msg.delete();
        const embed = new RichEmbed()
        .setImage('https://resmim.net/f/g8LtgQ.gif?nocache')
        .setFooter('Hahaha')
        .setColor('RANDOM')

        msg.channel.send(embed)
		
		console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${msg.author.tag} (${msg.author.id}) ›› Haha. - ${msg.guild.name}\n`);
    }
};