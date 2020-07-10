const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", message => {
  if (message.author.bot) return;

  if (
    message.content.startsWith("**Suggestion**") &&
    message.channel.id == "666083207568949257"
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
    Ran: "526619819349639188",
    Insert: "542566785862467584",
    insert:"542566785862467584",
    kai: "535933767127138332",
    Kai: "535933767127138332",
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
    mup: "592257528532828161",
    Austrian: "609457990503760016",
    "Please clap": "👏",
    Louisiana: "622666712101158933",
    Crooked: "567522921342435338",
    Amber: "626927140855742484",
    Wooo: "690523343065055312",
    Pike: "705871716504567838",
    Kuroko: "626255320590712834",
    wooo: "690523343065055312",
    austrian: "609457990503760016",
    pike: "705871716504567838",
    Expert: "690520163048488960",
    Mac: "690523641699500044",
    "ah yes": "656259706288865300",
    "Ah yes": "656259706288865300",
    jae: "691226217592127548",
    Jae: "691226217592127548",
    Bob: "730906776899158107",
    bob: "730906776899158107",
    Light: "692257534907777024",
    light: "692257534907777024"
  };

  const reactionKeys = Object.keys(reactions);
  const responseActions = reactionKeys.filter(
    value => -1 !== message.content.indexOf(value)
  );

  for (response of responseActions) {
    try {
      message
        .react(reactions[response])
        .then(reaction => console.log(typeof reaction));
    } catch (err) {
      console.error("Failed to react with " + reactions[response]);
    }
  }

  if (
    message.content.includes(
      "Did you ever hear the tragedy of Muppet the Coder?"
    )
  ) {
    message.channel.send(
      "I thought not. It's not a story Ning would tell you. It's a player legend. Muppet was a Coder of the Code, so powerful and so wise he could use the Force to influence the bits to create mediocre jokes... He had such a knowledge of the code that he could even give the ones he cared about their own mediocre joke responses. The dark side of Code is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he tried to change the very fabric of the bot, but it crashed while he was working on it. Ironic, he could build a bot to complete half the subreddit modwork, but broke the one that delivered mediocre joke responses"
    );
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

    //if (thoughtCrimeDetails.length > 0) {
    //  crime =
    //   thoughtCrimeDetails[
    //      Math.floor(Math.random() * thoughtCrimeDetails.length)
    //    ];

    //  message.channel.send(
    //    "Attention <@" +
    //      message.author.id +
    //      ">: You have committed a thoughtcrime against the State. " +
    //      thoughtCrimes[crime]
    //  );
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

  if (message.content === "!date") {
    let seasonStart = Date.UTC(2020, 7, 5);
    let now = Date.now();
    let year = (Math.floor((now - seasonStart)/604800000) + 2020).toString();
    let lookup = ["January", "February/March", "April/May", "June", "July/August", "September/October", "November/December"];
    let month = lookup[new Date().getDay()];
    message.channel.send("The date is " + month + " " + year + ".");
  }
});

client.login(process.env.BOT_TOKEN);
