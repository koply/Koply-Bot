const { Command } = require('discord.js-commando');
const moment = require('moment');

module.exports = class uuidCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'uuid',
            group: 'grup',
            memberName: 'uuid',
            description: 'W4F-0AW4FA-0W4'
        });    
    }

    run(msg) {
		var text = "";
		
		const ran = ['f', 'w', 'a', '4', '0']
		
		for (let i = 0; i<18; i++) {
			if (i === 0) {
				text+="f";
			}
			if (i !== 0) {
				text+=ran[getRandomInt(5)];
			}
			if (i === 4 || i === 8|| i === 12 || i === 16) {
				text+='-';
			}
		}
		let num = 0;
		text = text.toLowerCase().split('');
		for (let i = 0; i < text.length; i++) {
			num = getRandomInt(2);
			if (num === 1) {
				text[i] = text[i].toUpperCase();
			}
		} 
		let txt = "";
		for (let i = 0; i < text.length; i++) {
			txt += text[i];
		}
		msg.channel.send(txt + "");
		console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${msg.author.tag} (${msg.author.id}) UUID F4WA-. - ${msg.guild.name}\n`);
    }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}