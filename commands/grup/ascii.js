const commando = require('discord.js-commando');
const ascii = require('figlet');
const moment = require('moment')

module.exports = class AsciiTextCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'ascii',
      group: 'grup',
      memberName: 'ascii',
      description: 'Yazınızı ascii yazı türüne çevirir.',
      args: [{
        key: 'ascii',
        label: 'text',
        prompt: 'Ascii olarak ne çevirmek istersin?',
        type: 'string',
        validate: text => {
          if (text.length <= 10) return true
          return 'Çok uzun! En fazla 10 karakter olmalıdır.'
        },
        infinite: false
      }]
    })
  }

  async run(message, args) {
    if (client.hasPermission("MANAGE_MESSAGES")) {
	message.delete();
    }
    ascii(args.ascii, {
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted'
    },
    function(err, data) {

		message.channel.send(data, {
			code: 'text'
		})
    })
	console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message.author.tag} (${message.author.id}) ›› AsciiTextCommand. - ${message.guild.name}\n`);
  }
};
