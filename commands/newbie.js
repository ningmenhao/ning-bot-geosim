const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'newbie',
	description: 'Provide a link to the player\'s guide',
	async execute(interaction) {

		const newbieGuideEmbed = new MessageEmbed()
			.setColor('#5b92e5')
			.setTitle('Welcome to r/Geosim New Members!')
			.setURL('https://www.reddit.com/r/Geosim/wiki/guide')
			.setDescription("[Read the guide](https://www.reddit.com/r/Geosim/wiki/guide) to get started. Also check the [player master list](https://www.reddit.com/r/geosim/wiki/players) or [our website](https://geosim.xpowers.cyou)");

		await interaction.reply({embeds: [newbieGuideEmbed]});
	},
};
