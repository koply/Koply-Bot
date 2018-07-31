const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const moment = require('moment');


module.exports = class DurumlanıyoruzCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'durumlan',
            group: 'admin',
            memberName: 'durumlan',
            description: 'Botun oynuyor kısmını değiştirirsiniz.',
 			throttling: {
                usages: 3,
                duration: 5
            },
			args: [
				{
					key: 'text',
					prompt: 'Durum ne olsun?',
					type: 'string'
				}
			]
        });    
    }
	
	hasPermission(msg) {
		return this.client.isOwner(msg.author);
	}

    run(msg, {text}) {

		client.user.setActivity(text);
		
        console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${msg.author.tag} (${msg.author.id}) UUID F4WA-. - ${msg.guild.name}\n`);

        msg.channel.send("Yaptım ağam!");
    }
};