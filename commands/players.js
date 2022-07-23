const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'players',
	description: 'Provide a link to the list of currently claimed players',
	async execute(interaction) {

		const playerlistEmbed = new MessageEmbed()
			.setColor('#5b92e5')
			.setTitle('List of Current and Open Claims')
			.setURL('https://www.reddit.com/r/geosim/wiki/players')
			.setDescription("[Check the player master list](https://www.reddit.com/r/geosim/wiki/players) or [our website](https://geosim.xpowers.cyou)");

		await interaction.reply({embeds: [playerlistEmbed]});
	},
};
