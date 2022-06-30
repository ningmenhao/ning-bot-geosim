const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'guildMemberAdd',
	execute(member){
		console.log(`User ${member.user.id} joined the server`);
		let welcomeEmbed = new MessageEmbed()
        		.setAuthor(`${member.user.tag} just joined!`, member.user.avatarURL())
        		.setDescription("Welcome to Angry Birds Economy Server! Don't forget to read the <#748333038294794241>! <:WelcomePigHappy:777683105863041054>")
        		.setColor("FF0000");
    		member.guild.channels.cache.get("712949115943911475").send({ embeds: [welcomeEmbed] })
			.catch((err) => console.log(err));
	},
};
