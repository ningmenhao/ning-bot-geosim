const fs = require('fs');
module.exports = {
	name: 'guildMemberAdd',
	execute(member){
		guildMember.guild.channels.cache.get('712949115943911475').send(
			`**@${guildMember.user.id}, welcome to Geosim!** A mod will be in shortly to give you access to the rest of the server. In the meantime, let us know where you found us! @Moderator`
		);
	},
};
