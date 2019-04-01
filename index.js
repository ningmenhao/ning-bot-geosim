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
        message.react("⬇")
      }).catch(function() {
        //Something
      });
       
  }
  
  if (message.content.includes("ning")) {
    message.react(client.emojis.get("503376027356102656"))
    .then(reaction => console.log(typeof reaction));
  }
  
  if (message.content.includes("ran")) {
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
  
  if (message.content.includes("cav")) {
    message.react(client.emojis.get("529094281361620992"))
    .then(reaction => console.log(typeof reaction));
  }
  
  if (message.content.includes("slime")) {
    message.react(client.emojis.get("539631337276178432"))
    .then(reaction => console.log(typeof reaction));
  }
  
  if (message.content.includes("wren")) {
    message.react(client.emojis.get("505513510990643201"))
    .then(reaction => console.log(typeof reaction));
  }
  
  if (message.content.includes("deusos")) {
    message.react(client.emojis.get("513908869726994433"))
    .then(reaction => console.log(typeof reaction));
  }
  
  if (message.content.includes("erhard")) {
    message.react(client.emojis.get("539631984931241994"))
    .then(reaction => console.log(typeof reaction));
  }

  if (message.content.includes("odd")) {
    message.react(client.emojis.get("465949712852320277"))
    .then(reaction => console.log(typeof reaction));
  }

  if (message.content.includes("hugh")) {
    message.react(🤗)
    .then(reaction => console.log(typeof reaction));
  }
  
});

client.login(process.env.BOT_TOKEN);