const fs = require('fs');
module.exports = {
	name: 'messageCreate',
	execute(message) {
		const data = fs.readFileSync('./reactions.json', 'utf8');
		let reactions = JSON.parse(data);
		reactions = (Object.prototype.hasOwnProperty.call(reactions, message.guildId)) ? reactions[message.guildId] : reactions['default'];

		const reactionKeys = Object.keys(reactions);
		const responseActions = reactionKeys.filter(
			value => message.content.indexOf(value) !== -1,
		);

		let response;
		for (response of responseActions) {
			try {
				message.react(reactions[response]);
			}
			catch (err) {
				console.err(`Failed to react with ${reactions[response]} with ${err}`);
			}
		}
	},
};