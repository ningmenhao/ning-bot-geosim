module.exports = {
	name: 'date',
	description: 'Replies with the current ingame date!',
	async execute(interaction) {
		// Remember months count from 0. January is 0, August is 7, December is 11
		const seasonStartDate = Date.UTC(2021, 10, 8);

		const now = Date.now();
		const year = (Math.floor((now - seasonStartDate) / 604800000) + 2021).toString();
		const lookup = ['November/December', 'January', 'February/March', 'April/May', 'June', 'July/August', 'September/October'];
		const month = lookup[new Date().getDay()];

		await interaction.reply(`The date is ${month} ${year}!`);
	},
};
