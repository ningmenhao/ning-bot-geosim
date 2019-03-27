const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

console.log(auth.token);

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
  
});

client.login(process.env.BOT_TOKEN);