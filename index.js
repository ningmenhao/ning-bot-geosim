const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  
  if (message.author.bot) return;

  if (message.content.startsWith("**Suggestion**") && message.channel.id == "454033864323629059") {
    message.react("📌");
    console.log(message.content+"\n");
    
    client.channels.get("454045860435722240").send("Suggestion from: "+message.member+"\n\n"+message.content.substring(15))
      .then(function (message) {
        message.react("⬆")
        .then(message.react("⬇"))
      }).catch(function() {
        //Something
      });
       
  }

  if (message.content.startsWith("!changeAllNicknames") && (message.member.roles.find(r => r.name === "Moderator") || message.member.roles.find(r => r.name === "Server Owner"))){
    message.guild.members.forEach(function(guildMember, guildMemberId) {
      guildMember.setNickname(message.content.substring(20))
      .then(function (guildMember, guildMemberId) {
        console.log(guildMemberId, guildMember.user.username)
      }).catch(function() {
        //Something, I don't code in JS
      });
    });
  }

  if (message.content.startsWith("!resetAllNicknames") && (message.member.roles.find(r => r.name === "Moderator") || message.member.roles.find(r => r.name === "Server Owner"))){
    message.guild.members.forEach(function(guildMember, guildMemberId) {
      guildMember.setNickname(guildMember.user.username)
      .then(function (guildMember, guildMemberId) {
        console.log(guildMemberId, guildMember.user.username)
      }).catch(function() {
        //Something, I hate js
      });
    });
  }
  
  if (message.content.includes("Ning")) {
    message.react(client.emojis.get("503376027356102656"))
    .then(reaction => console.log(typeof reaction));
  }
  
  if (message.content.includes("Ran")) {
    message.react(client.emojis.get("526619819349639188"))
    .then(reaction => console.log(typeof reaction));
  }
  
  if (message.content.includes("Insert")) {
    message.react(client.emojis.get("542566785862467584"))
    .then(reaction => console.log(typeof reaction));
  }
  
  if (message.content.includes("kai")) {
    message.react(client.emojis.get("535933767127138332"))
    .then(reaction => console.log(typeof reaction));
  }
  
  if (message.content.includes("Cav")) {
    message.react(client.emojis.get("529094281361620992"))
    .then(reaction => console.log(typeof reaction));
  }
  
  if (message.content.includes("Slime")) {
    message.react(client.emojis.get("539631337276178432"))
    .then(reaction => console.log(typeof reaction));
  }
  
  if (message.content.includes("Wren")) {
    message.react(client.emojis.get("584563795003703296"))
    .then(reaction => console.log(typeof reaction));
  }
  
  if (message.content.includes("gc")) {
    message.react(client.emojis.get("584563530007707695"))
    .then(reaction => console.log(typeof reaction));
  }

  if (message.content.includes("Deusos")) {
    message.react(client.emojis.get("513908869726994433"))
    .then(reaction => console.log(typeof reaction));
  }
  
  if (message.content.includes("derjagger")) {
    message.react(client.emojis.get("584571574502555681"))
    .then(reaction => console.log(typeof reaction));
  }

  if (message.content.includes("brantman")) {
    message.react(client.emojis.get("584562235293171713"));
  }

  if (message.content.includes("erhard")) {
    message.react(client.emojis.get("539631984931241994"))
    .then(reaction => console.log(typeof reaction));
  }

  if (message.content.includes("Odd")) {
    message.react(client.emojis.get("465949712852320277"))
    .then(reaction => console.log(typeof reaction));
  }

  if (message.content.includes("hugh")) {
    message.react("🤗")
    .then(reaction => console.log(typeof reaction));
  }

  if (message.content.includes("Liquid")) {
    message.react(client.emojis.get("589555612464185344"))
    .then(reaction => console.log(typeof reaction));
  }

  if (message.content.includes("Erag")) {
    message.react(client.emojis.get("562489687873421332"))
    .then(reaction => console.log(typeof reaction));
  }

  if (message.author.id === '194029156974067712') {
    message.react("🖕")
    .then(reaction => console.log("finger " + typeof reaction));
  }

  if (message.content.includes("demonrat")) {
    message.react("👿")
    .then(reaction => console.log(typeof reaction))
    .then(message.react("🐀"));
  }

  if (message.content.includes("@everyone") && message.channel.id != "229828751800795136") {
    message.react("😠");
  }

  if (message.content.toLowerCase().includes("kulak")) {
    message.react("🚜");
  }
  
  if (message.content.includes("Please clap.")) {
    message.react("👏");
  }
  
});

client.login(process.env.BOT_TOKEN);
