const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", message => {
  if (message.author.bot) return;

  if (
    message.content.startsWith("**Suggestion**") &&
    message.channel.id == "454033864323629059"
  ) {
    message.react("📌");
    console.log(message.content + "\n");

    client.channels
      .get("454045860435722240")
      .send(
        "Suggestion from: " +
          message.member +
          "\n\n" +
          message.content.substring(15)
      )
      .then(function(message) {
        message.react("⬆").then(message.react("⬇"));
      })
      .catch(function() {
        //Something
      });
  }

  if (
    message.content.startsWith("!changeAllNicknames") &&
    (message.member.roles.find(r => r.name === "Moderator") ||
      message.member.roles.find(r => r.name === "Server Owner"))
  ) {
    message.guild.members.forEach(function(guildMember, guildMemberId) {
      guildMember
        .setNickname(message.content.substring(20))
        .then(function(guildMember, guildMemberId) {
          console.log(guildMemberId, guildMember.user.username);
        })
        .catch(function() {
          //Something, I don't code in JS
        });
    });
  }

  if (
    message.content.startsWith("!resetAllNicknames") &&
    (message.member.roles.find(r => r.name === "Moderator") ||
      message.member.roles.find(r => r.name === "Server Owner"))
  ) {
    message.guild.members.forEach(function(guildMember, guildMemberId) {
      guildMember
        .setNickname(guildMember.user.username)
        .then(function(guildMember, guildMemberId) {
          console.log(guildMemberId, guildMember.user.username);
        })
        .catch(function() {
          //Something, I hate js
        });
    });
  }

  const reactions = {
    Ning: "503376027356102656",
    Ran: "526619819349639188",
    Insert: "542566785862467584",
    kai: "535933767127138332",
    Cav: "529094281361620992",
    Slime: "539631337276178432",
    Wren: "584563795003703296",
    GC: "584563530007707695",
    Deusos: "513908869726994433",
    derjagger: "584571574502555681",
    brantman: "584562235293171713",
    erhard: "539631984931241994",
    Odd: "465949712852320277",
    hugh: "🤗",
    Liquid: "589555612464185344",
    Erag: "562489687873421332",
    Mup: "592257528532828161",
    Austrian: "609457990503760016",
    "Please clap": "👏",
    Louisiana: "622666712101158933",
    Crooked: "567522921342435338",
    Amber: "626927140855742484",
    Wooo: "🇴"
  };

  const reactionKeys = Object.keys(reactions);
  const responseActions = reactionKeys.filter(
    value => -1 !== message.content.indexOf(value)
  );

  for (response of responseActions) {
    message
      .react(client.emojis.get(reactions[response]))
      .then(reaction => console.log(typeof reaction));
  }

  if (message.channel.id == "569506101469380618") {
    const thoughtCrimes = {
      massa:
        'All suggestions of the existence of project "War Canoe" are lies and falsehoods.',
      monarchism:
        "Only by the guidance of the benevolent Party may any system of government truly prosper.",
      capitalism: "Your social credit score has been penalized accordingly.",
      WP: "Do not leave for WP. 'Tis a Silly Place",
      Tiananmen:
        "Tiananmen Square is best known for the portrait of Chairman Mao, who even in his passing continues to watch over us all.",
      tiananmen:
        "Tiananmen Square is best known for the portrait of Chairman Mao, who even in his passing continues to watch over us all.",
      "1989":
        "The year 1989 is best known for the birth of Lü Zhiwu, famous bronze medalist swimmer. No other reasons.",
      "Winnie the Pooh":
        "Glorious leader President Xi shall not be slandered in such a manner."
    };

    const thoughtCrimeKeys = Object.keys(thoughtCrimes);
    const thoughtCrimeDetails = thoughtCrimeKeys.filter(
      value => -1 !== message.content.indexOf(value)
    );

    if (thoughtCrimeDetails.length > 0) {
      crime =
        thoughtCrimeDetails[
          Math.floor(Math.random() * thoughtCrimeDetails.length)
        ];

      message.channel.send(
        "Attention <@" +
          message.author.id +
          ">: You have committed a thoughtcrime against the State. " +
          thoughtCrimes[crime]
      );
    }
  }

  if (message.content.includes("demonrat")) {
    message
      .react("👿")
      .then(reaction => console.log(typeof reaction))
      .then(message.react("🐀"));
  }

  if (
    message.content.includes("@everyone") &&
    message.channel.id != "229828751800795136"
  ) {
    message.react("😠");
  }

  if (message.content.toLowerCase().includes("kulak")) {
    message.react("🚜");
  }
});

client.login(process.env.BOT_TOKEN);
