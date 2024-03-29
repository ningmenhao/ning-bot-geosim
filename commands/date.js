module.exports = {
	name: 'date',
	description: 'Replies with the current ingame date!',
	async execute(interaction) {
		// Remember months count from 0. January is 0, August is 7, December is 11
		// the season "start date" here is the first Monday of the season's start date
		// (or the first day of the week that the season changes years
		const seasonStartDate = Date.UTC(2022, 6, 25);

		const now = Date.now();
		const year = (Math.floor((now - seasonStartDate) / 604800000) + 2022).toString();
		const lookup = [ "November/December", "January", "February/March", "April/May", "June", "July/August", "September/October" ];
		const month = lookup[new Date().getDay()];

		await interaction.reply(`The date is ${month} ${year}!`);
	},
};
