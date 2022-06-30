const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'guildMemberAdd',
	execute(member){
		console.log(`User ${member.user.id} joined the server`);
		let welcomeEmbed = new MessageEmbed()
        		.setAuthor(`${member.user.tag} just joined!`, member.user.avatarURL())
        		.setDescription(`<@${member.user.id}>, welcome to Geosim! A mod will be in shortly to give you access to the rest of the server. In the meantime, let us know where you found us! <@&214543567878750208>`)
        		.setColor("FF0000");
    		member.guild.channels.cache.get("712949115943911475").send({ embeds: [welcomeEmbed] })
			.catch((err) => console.log(err));
	},
};
