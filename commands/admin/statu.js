const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const moment = require('moment');


module.exports = class StatuCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'statu',
            group: 'admin',
            memberName: 'statu',
            description: 'Botun durumunu görüntülersiniz.',
 			throttling: {
                usages: 3,
                duration: 5
            }
        });    
    }
	
	hasPermission(msg) {
		return this.client.isOwner(msg.author);
	}

    run(msg) {
        let sunucular = client.guilds.map(g =>`\`\`\`\n\n${g.name} - ${g.id}\`\`\``);

        const embed = new RichEmbed()
            .setAuthor(msg.author.tag, msg.author.avatarURL)
            .setColor('RANDOM')
            .setTimestamp()
            .addField("Botun bulunduğu sunucu sayısı:", `**${client.guilds.size}**`)
            .addField("Botun bulunduğu sunucuların listesi:", `${sunucular}`)

        console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${msg.author.tag} (${msg.author.id}) UUID F4WA-. - ${msg.guild.name}\n`);

        msg.channel.send(embed);
    }
};