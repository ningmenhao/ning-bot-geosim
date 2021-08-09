const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'suggestion',
	description: 'Description of the suggestion',
	async execute(interaction) {
		const title = interaction.options.getString('title');
		const description = interaction.options.getString('description');
		const author = interaction.member.displayName;
		const avatar = interaction.member.user.avatarURL();

		const exampleEmbed = new MessageEmbed()
			.setColor('#5b92e5')
			.setTitle(`${title}`)
			.setAuthor(`${author}`, `${avatar}`, 'https://discord.js.org')
			.setDescription(`${description}`)
			.setTimestamp();


		const suggestion_channel = interaction.client.channels.cache.get('874105951676952636');
		suggestion_channel.send({ embeds: [exampleEmbed] }).then(message => message.react('⬆')).then(messageReaction => messageReaction.message.react('⬇'));
		await interaction.reply('Suggestion submitted!');
	},
};