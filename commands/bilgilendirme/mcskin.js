const commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class McSkinCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: "mcskin",
			aliases: ["minecraftskin"],
			group: "bilgilendirme",
			memberName: "mcskin",
			description: "Kullanıcı adı ile minecraft skini gönderir.",
			guildOnly: true,
			throttling: {
				usages: 2,
				duration: 3
			},
			args: [
				{
					key: "msg",
					prompt: "Minecraft kullanıcı adını girin.",
					type: "string",
					label: "kullanıcı adı",
					min: 3,
					max: 32
				}
			]
		});
	}

	async run(msg, args) {
        const kadi = args.msg;
        var embed = new RichEmbed()
        .setTitle(`Skin, ${kadi} ->`)
		.setImage(`https://minotar.net/armor/body/${kadi}/300.png`)
        .setAuthor(msg.author.tag, msg.author.avatarURL)
        .setColor('RANDOM');
		return msg.channel.send({embed});
		console.log("Mcskin komutu " + msg.author.tag + " tarafından " + msg.guild.name + " sunucusunda kullanıldı.");
	};
};
