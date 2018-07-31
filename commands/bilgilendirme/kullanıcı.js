const stripIndents = require('common-tags').stripIndents;
const commando = require('discord.js-commando');
const Discord = require('discord.js');
const moment = require('moment');

module.exports = class UserInfoCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'kullanıcı',
			aliases: ['kullanıcıbilgi', 'kb', 'kbilgi'],
			group: 'bilgilendirme',
			memberName: 'kullanıcı',
			description: 'İstediğiniz bir kişi hakkında bilgi verir.',
			examples: ['kullanıcı-bilgi @Koply5843', 'kullanıcı-bilgi Koply'],
			guildOnly: true,

			args: [
				{
					key: 'member',
					label: 'kullanıcı',
					prompt: 'Kimin hakkında bilgi almak istersin?',
					type: 'member',
					default: ''
				}
			]
		});
	}

	async run(msg, args) {
		if (args.member === "") {
			const member = msg.member;
			const user = member.user;
			const statusOfAFK = this.client.provider.get(user.id, 'afkStatus', []);
			const guildOfAFK = this.client.provider.get(user.id, 'afkGuild', []);
			const Durum = user.presence.status;
			const Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
			const durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
			
			if (statusOfAFK === true) {
				if (guildOfAFK === msg.guild.id) {
					var embed = {
						color: Durm,
						author: {
							name: user.username,
							icon_url: user.avatarURL,
						},
						fields: [
							{
								name: '❯ Ad ve ID',
								value: `${user.tag}, ${user.id}`,
								inline: false
							},
							{
								name: '❯ Kayıt tarihi',
								value: `${user.createdAt}`,
								inline: false
							},
							{
								name: '❯ Durumu',
								value: `${durm} - AFK`,
								inline: false
							},
							{
								name: '❯ Şu an oynadığı oyun',
								value: `${user.presence.game ? user.presence.game.name : 'Belirtilmemiş'}`,
								inline: false
							},
							{
								name: '❯ Rolleri',
								value: `${member.roles.map(roles => `\`${roles.name}\``).join(' ')}`,
								inline: false
							},
						],
						thumbnail: {
							url: user.avatarURL
						}
					};
					return msg.channel.send({embed});
				}
			}
	
			var embed = {
				color: Durm,
				author: {
					name: user.username,
					icon_url: user.avatarURL,
				},
				fields: [
					{
						name: '❯ Ad ve ID',
						value: `${user.tag}, ${user.id}`,
						inline: false
					},
					{
						name: '❯ Kayıt tarihi',
						value: `${user.createdAt}`,
						inline: false
					},
					{
						name: '❯ Durumu',
						value: `${durm}`,
						inline: false
					},
					{
						name: '❯ Şu an oynadığı oyun',
						value: `${user.presence.game ? user.presence.game.name : 'Belirtilmemiş'}`,
						inline: false
					},
					{
						name: '❯ Rolleri',
						value: `${member.roles.map(roles => `\`${roles.name}\``).join(' ')}`,
						inline: false
					},
				],
				thumbnail: {
					url: user.avatarURL
				}
			};
			return msg.channel.send({embed});			
		}



		const member = args.member;
		const user = member.user;
		const statusOfAFK = this.client.provider.get(user.id, 'afkStatus', []);
		const guildOfAFK = this.client.provider.get(user.id, 'afkGuild', []);
		const Durum = user.presence.status;
		const Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
		const durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
		
		if (statusOfAFK === true) {
			if (guildOfAFK === msg.guild.id) {
				var embed = {
					color: Durm,
					author: {
						name: user.username,
						icon_url: user.avatarURL,
					},
					fields: [
						{
							name: '❯ Ad ve ID',
							value: `${user.tag}, ${user.id}`,
							inline: false
						},
						{
							name: '❯ Kayıt tarihi',
							value: `${user.createdAt}`,
							inline: false
						},
						{
							name: '❯ Durumu',
							value: `${durm} - AFK`,
							inline: false
						},
						{
							name: '❯ Şu an oynadığı oyun',
							value: `${user.presence.game ? user.presence.game.name : 'Belirtilmemiş'}`,
							inline: false
						},

						{
							name: '❯ Rolleri',
							value: `${member.roles.map(roles => `\`${roles.name}\``).join(' ')}`,
							inline: false
						},
					],
					thumbnail: {
						url: user.avatarURL
					}
				};
				return msg.channel.send({embed});
			}
		}

		var embed = {
			color: Durm,
			author: {
				name: user.username,
				icon_url: user.avatarURL,
			},
			fields: [
				{
					name: '❯ Ad ve ID',
					value: `${user.tag}, ${user.id}`,
					inline: false
				},
				{
					name: '❯ Kayıt tarihi',
					value: `${user.createdAt}`,
					inline: false
				},
				{
					name: '❯ Durumu',
					value: `${durm}`,
					inline: false
				},
				{
					name: '❯ Şu an oynadığı oyun',
					value: `${user.presence.game ? user.presence.game.name : 'Belirtilmemiş'}`,
					inline: false
				},
				{
					name: '❯ Rolleri',
					value: `${member.roles.map(roles => `\`${roles.name}\``).join(' ')}`,
					inline: false
				},
			],
			thumbnail: {
				url: user.avatarURL
			}
		};
		msg.channel.send({embed});
		console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${msg.author.tag} (${msg.author.id}) ›› Kullanıcı bilgi. - ${msg.guild.name}\n`);
	}
};
