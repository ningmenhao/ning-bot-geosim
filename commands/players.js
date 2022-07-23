const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'players',
	description: 'Provide a link to the list of currently claimed players',
	async execute(interaction) {

		const playerlistEmbed = new MessageEmbed()
			.setColor('#5b92e5')
			.setTitle("List of Current and Open Claims")
			.setDescription("geosim.xpowers.cyou or https://www.reddit.com/r/geosim/wiki/players");

		await interaction.reply({embeds: [playerlistEmbed]});
	},
};
