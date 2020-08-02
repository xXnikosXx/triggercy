// nodejs for filesystem
const fs = require("fs");
// require the discord.js module
const Discord = require("discord.js");
global.Discord = Discord;
// require canvas module for image manipulation
const Canvas = require("canvas");
// link to .json config file
const { prefix, token, adminRole } = require("./config.json");

// create a new discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();
global.client = client;

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

// ...
let target;
let targetName;
global.target = "000000000000000000";
global.targetName = "null";
global.adminRole = "738499487319720047";
// 737693607737163796
let hasRun = false;

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

// event triggers only once, right after bot logs in
client.once("ready", () => {
	console.log("Ready!");
	console.log(adminRole);
	client.user.setActivity("You", { type: "WATCHING" });
});

// for new member join - sends message including attachent
client.on("guildMemberAdd", async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === "welcome");
	global.channel = channel;
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext("2d");

	const background = await Canvas.loadImage("./wallpaper.jpg");
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = "#74037b";
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = "28px sans-serif";
	ctx.fillStyle = "#ffffff";
	ctx.fillText("Welcome to the server,", canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.fillStyle = "#ffffff";
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: "jpg" }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome-image.png");

	channel.send(`Welcome to the server, ${member}!`, attachment);
});

// listening for messages.
client.on("message", message => {
	hasRun = false;

	// if (!message.content.startsWith(prefix) || message.author.bot) return;

	// log messages
	console.log(`<${message.author.tag}> ${message.content}`);

	// create an args var (const), that slices off the prefix entirely, removes the leftover whitespaces and then splits it into an array by spaces.
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	global.args = args;

	// Create a command variable by calling args.shift(), which will take the first element in array and return it
	// while also removing it from the original array (so that you don't have the command name string inside the args array).
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) ||
		client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (message.author.id === global.target) {

		// shift msg to lowercase, to use in trigger commands only instead of message.
		let msglow = message.content;
		// to make linter warning disappear >.<^
		msglow = message.content.toLowerCase();

		// splitting the message into arguements for better processing (to be used in code below)
		const splitMessage = msglow.slice().split(" ");
		console.log("splitMessage.length[" + splitMessage.length + "]");
		let i;
		for (i = 0; i < splitMessage.length; i++) {
			if (splitMessage[i] === "hi") {
				console.log("arg trigger:" + splitMessage);
				message.reply("who's high now? What? Who? Why? Where? Why high? Why not low? What does high even mean? Fuck, my head... Umm, pass that joint pls? kthanksbye~");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "lol") {
				console.log("arg trigger:" + splitMessage);
				message.reply("OMG LOL SO MUCH FUNNE OH LOL VERRY FUNS LOLS LAUGHING MAO KSKSKS POGGERS LOLOLO TOLOLO OMEGALUL HAHA GUD FUN THIS MAKES LAUGH VERY MANY FUNNY HAHAHA -_-");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "omg") {
				console.log("arg trigger:" + splitMessage);
				message.reply("OMG WOW HOW EVEN WHAT? GUH IFKR?!? =0");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "wow") {
				console.log("arg trigger:" + splitMessage);
				message.reply("IFKR lookit dis its so *insert wordy word here* ISNT IT =D :heart_eyes:");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "hell") {
				console.log("arg trigger:" + splitMessage);
				message.reply("HELL NAH SISTUH :nuh-huh:");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "pls") {
				console.log("arg trigger:" + splitMessage);
				message.reply("pls mommy pls :pleading_face:");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "what") {
				console.log("arg trigger:" + splitMessage);
				message.reply("WHAT WHERE WHY HOW WHEN WH-- AAAAAAAIUVSDHIBIFVB");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "idk") {
				console.log("arg trigger:" + splitMessage);
				message.reply("If you don't know, Cy, WHO KNOWS? HUH? *iDk*");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "okay") {
				console.log("arg trigger:" + splitMessage);
				message.reply("okay? we gud? =D ^^");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "ok") {
				console.log("arg trigger:" + splitMessage);
				message.reply("OK! ALL GOOD, EVERYTHING FINE, NO WORRIES HERE PEOPLES! =D");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "see") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Lemme fetch your glasses :nerd:");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "and") {
				console.log("arg trigger:" + splitMessage);
				message.reply("***__and and and and and and and and and and and and and and and and and aand and adadnadand and an dna dna dn and an dna dna n da iuewhaspvihzpdsbzp;__***");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "um") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Uh ummm errrrr I... just... *thonks* iiiii uuuuuuhmmm *ahem* it's just that... theeeee errrrr uuuuum uuuuuuuuhhh eeeeeeeehhhh I-- :QwQ:");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "bet") {
				console.log("arg trigger:" + splitMessage);
				message.reply("FUGGEN BET CY I-- :marioSeizure: FITE ME IRL CY JUST FITE ME IRL -- MASTER I WILL WIN FOR YOU UwU");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "g") {
				console.log("arg trigger:" + splitMessage);
				message.reply("geeee ooooo weeeeee aaaaaa um ye~");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "cough") {
				console.log("arg trigger:" + splitMessage);
				message.reply("*hands over water* :sobeautiful:");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "a") {
				console.log("arg trigger:" + splitMessage);
				message.reply("aa b c d e f g h i j k l m n o p q r s t u v w x y z 1 2 3 4 5 6 7 8 9 0 ` ~ - _ = + [ { ] } ; : '  ,   < . , > / ? ' ; : ] /*- ! @ # $ % ^ & * ( ) ∟0A0]+5002 09Db401○869♣0+○5☻☻○	86☺6365V☼21○8▲54○8A13§6◘7A18029☺609☺0♠11z98☺06♣1○10○1☺9◙6☺910♠3510♣6510é6#1065106≥30635◙6▼0?10♠355135631 heehee alt codes ar fum ");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "so") {
				console.log("arg trigger:" + splitMessage);
				message.reply("YOSH? :stare:");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "nikos") {
				console.log("arg trigger:" + splitMessage);
				message.reply("LEAVE MY PRECIOUS MASTER ALONE UwU HE GUD KID HE DID DO NUTHIN WRUNG HE GUD BOYE UKI CY? >.<^");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "need") {
				console.log("arg trigger:" + splitMessage);
				message.reply("I need a *insert useless thing i most certainly dont need but definitely still want to acquire here* (eg. a life QwQ)");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "fair") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Fair? what are you, the fucking state judge? >:(");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "tbh") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Yes, miss, may I remind you you're ~~under oath~~ **a *crackhead***");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "wit") {
				console.log("arg trigger:" + splitMessage);
				message.reply("with*");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "frog") {
				console.log("arg trigger:" + splitMessage);
				message.reply("let Cy = \"froge\"; \nglobal.Cy = Cy; \nCy froge confirmed :cyStolen: :qwq: :help: :marioSeizure:");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "froge") {
				console.log("arg trigger:" + splitMessage);
				message.reply("let Cy = \"froge\"; \nglobal.Cy = Cy; \nCy froge confirmed :cyStolen: :qwq: :help: :marioSeizure:");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "yay") {
				console.log("arg trigger:" + splitMessage);
				message.reply("AYAYAYAYAYAYYAYAYAYYAYAYAYAYAYY WHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "bad") {
				console.log("arg trigger:" + splitMessage);
				message.reply("heehee");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "lovely") {
				console.log("arg trigger:" + splitMessage);
				message.reply("innit? =D");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "love") {
				console.log("arg trigger:" + splitMessage);
				message.reply("ily u lil bish cracched cumrad (hehe cum hehe)");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "lmao") {
				console.log("arg trigger:" + splitMessage);
				message.reply("ubapgibvpha ohbvoibouBOUBVOSBZO CUAPRZICB PHAS OFBUA WHIAH URHDO UAHZDV SCUIVRDU DBIUBRDU ASU I CANT *WHEEZE*");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "ikfr") {
				console.log("arg trigger:" + splitMessage);
				message.reply("ifkr* >:()");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "ifkr") {
				console.log("arg trigger:" + splitMessage);
				message.reply("ikfr* >.<^ QwQ");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "yes") {
				console.log("arg trigger:" + splitMessage);
				message.reply("NO! >.< QwQ");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "god") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Which God eggsactly? :thonk:");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "ugh") {
				console.log("arg trigger:" + splitMessage);
				message.reply("tuff ikfkr?");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "rope") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Imma tie 'cha up Cy :grabbies:");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "hardcore") {
				console.log("arg trigger:" + splitMessage);
				message.reply("*whip slices air landing on thicc bumbums*");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "tho") {
				console.log("arg trigger:" + splitMessage);
				message.reply("then what CY? :THONK: :HMM: :THINK: :THINKMOVE: HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "dungeon") {
				console.log("arg trigger:" + splitMessage);
				message.reply("DnD NE1? :a_eyesshaking:");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "help") {
				console.log("arg trigger:" + splitMessage);
				message.reply("*runs fast af*");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "horny") {
				console.log("arg trigger:" + splitMessage);
				message.reply("*boonks* HORNY* JAIL U MEAN I HOPE >.<^ GET BACC IN, GET BACC INNNNNNNNNNNNNNN :let_me_in:");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "def") {
				console.log("arg trigger:" + splitMessage);
				message.reply("fo 'sho?'");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "pup") {
				console.log("arg trigger:" + splitMessage);
				message.reply("PUPS? =D :woah: :sobeautiful:");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "mine") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Yours? I'll be the juddge oof that mhmhm");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "gimme") {
				console.log("arg trigger:" + splitMessage);
				message.reply("NO! MINE! BACC UFF! *bites*");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "think") {
				console.log("arg trigger:" + splitMessage);
				message.reply("u wat?");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "wait") {
				console.log("arg trigger:" + splitMessage);
				message.reply(" no u");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "fuck") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Yes indeed, \"fucking\" ***is*** part of my short-af term plans =D ");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "short") {
				console.log("arg trigger:" + splitMessage);
				message.reply("CY'S SHORT OMG CY'S SOOOO SHORT YOU GUYS YOU DONT EVEN KNOWWWWWWWWW");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "I") {
				console.log("arg trigger:" + splitMessage);
				message.reply("yA WHAT, cY?");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "but") {
				console.log("arg trigger:" + splitMessage);
				message.reply("BUTTS?");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "that's") {
				console.log("arg trigger:" + splitMessage);
				message.reply("what is it?");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "thats") {
				console.log("arg trigger:" + splitMessage);
				message.reply("what is it?");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "jus") {
				console.log("arg trigger:" + splitMessage);
				message.reply(":froge:");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "cute") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Yes, Master Nikos ***I S*** cute, isn't he? =D");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "mean") {
				console.log("arg trigger:" + splitMessage);
				message.reply("who's man? whatcha mean?");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "sorry") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Apology accepted.");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "fucking") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Ya wanna?");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "<3") {
				console.log("arg trigger:" + splitMessage);
				message.reply("<3");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "sleep") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Young qtpies like Cy require sleep, BEGONE");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "pretty") {
				console.log("arg trigger:" + splitMessage);
				message.reply("yosh, ure");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "uwu") {
				console.log("arg trigger:" + splitMessage);
				message.reply("owo");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "owo") {
				console.log("arg trigger:" + splitMessage);
				message.reply("uwu");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "stop") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Ya mean keep going? SURE! =D");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "nooo") {
				console.log("arg trigger:" + splitMessage);
				message.reply("nuUUUUUUUUUUUUUUU");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "wtf") {
				console.log("arg trigger:" + splitMessage);
				message.reply("ech ifkr wtf? >P");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "milk") {
				console.log("arg trigger:" + splitMessage);
				message.reply("pp cream");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "stfu") {
				console.log("arg trigger:" + splitMessage);
				message.reply("No, Imma jus'\nOpen\nThe\nVirgin\nDown");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "plz") {
				console.log("arg trigger:" + splitMessage);
				message.reply("will thonk about it real hard i stg");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "aww") {
				console.log("arg trigger:" + splitMessage);
				message.reply("AWIE CUTYYYYYYY");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "needa") {
				console.log("arg trigger:" + splitMessage);
				message.reply("ya hafta?");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "i-") {
				console.log("arg trigger:" + splitMessage);
				message.reply("u- ?");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "fight") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Round 1; START!");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "fite") {
				console.log("arg trigger:" + splitMessage);
				message.reply("rund 1, fighte~");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "awful") {
				console.log("arg trigger:" + splitMessage);
				message.reply("I strongly disagree!");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "lemme") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Ure not allowed to!");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "aaAAA") {
				console.log("arg trigger:" + splitMessage);
				message.reply("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "fr") {
				console.log("arg trigger:" + splitMessage);
				message.reply("FR? U NO LYIN? =O");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "trash") {
				console.log("arg trigger:" + splitMessage);
				message.reply("I'm the Trashman =3");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "tell") {
				console.log("arg trigger:" + splitMessage);
				message.reply("I'mma try and remember!");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "knees") {
				console.log("arg trigger:" + splitMessage);
				message.reply(" THIGHS > KNEES ! ! ! ");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "sad") {
				console.log("arg trigger:" + splitMessage);
				message.reply("NUUUUUU WHY CY SAD? *alerts local authorities, alerts international authorities, alerts Master and frens*");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "kink") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Kinks are hawt");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "funny") {
				console.log("arg trigger:" + splitMessage);
				message.reply("HA MUS FUNNEE");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "mood") {
				console.log("arg trigger:" + splitMessage);
				message.reply("ifkr<3");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "bro") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Yish?");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "huh") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Hmhmhm?");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "tysm") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Ure whalecum<3");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "pfp") {
				console.log("arg trigger:" + splitMessage);
				message.reply("pftftftfffffpffffpfpfpfppfpffffffffffffffffffffffffffffffffffffffttt");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "kneecaps") {
				console.log("arg trigger:" + splitMessage);
				message.reply("STOLEN");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "die") {
				console.log("arg trigger:" + splitMessage);
				message.reply("why die D= I hab much to lib for =C");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "ily") {
				console.log("arg trigger:" + splitMessage);
				message.reply("No ily! stfu! <3");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "ilysm") {
				console.log("arg trigger:" + splitMessage);
				message.reply("NO F U I DO SM FU AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA .|.");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "sex") {
				console.log("arg trigger:" + splitMessage);
				message.reply("heehee seks");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "porn") {
				console.log("arg trigger:" + splitMessage);
				message.reply("LEWD");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "sub") {
				console.log("arg trigger:" + splitMessage);
				message.reply("Subby bois an subby gorls amirite =O");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "hurt") {
				console.log("arg trigger:" + splitMessage);
				message.reply("WHAT IS LOVE? BBY DONT HURT ME, DONT HURT ME ORAGBHSOISDFBGIOUBDIOFGBSOIUB");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "cy") {
				console.log("arg trigger:" + splitMessage);
				message.reply("CY");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "<:help:739173848775393412>") {
				console.log("arg trigger:" + splitMessage);
				message.reply("<:help:739173848775393412> <:help:739173848775393412> <:help:739173848775393412> <:help:739173848775393412> <:help:739173848775393412>");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "<:marioSeizure:738491486504615996>") {
				console.log("arg trigger:" + splitMessage);
				message.reply("<:marioSeizure:738491486504615996> <:marioSeizure:738491486504615996> <:marioSeizure:738491486504615996> <:marioSeizure:738491486504615996> <:marioSeizure:738491486504615996>");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "<:stare:738546139271397438>") {
				console.log("arg trigger:" + splitMessage);
				message.reply("<:stare:738546139271397438> <:stare:738546139271397438> <:stare:738546139271397438> <:stare:738546139271397438> <:stare:738546139271397438>");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "<:qwq:731013942431711304>") {
				console.log("arg trigger:" + splitMessage);
				message.reply("<:qwq:731013942431711304> <:qwq:731013942431711304> <:qwq:731013942431711304> <:qwq:731013942431711304> <:qwq:731013942431711304>");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "<:angery:737097071697592401>") {
				console.log("arg trigger:" + splitMessage);
				message.reply("<:angery:737097071697592401> <:angery:737097071697592401> <:angery:737097071697592401> <:angery:737097071697592401> <:angery:737097071697592401>");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if (splitMessage[i] === "<:socry:733581452494635018>") {
				console.log("arg trigger:" + splitMessage);
				message.reply("<:socry:733581452494635018> <:socry:733581452494635018> <:socry:733581452494635018> <:socry:733581452494635018> <:socry:733581452494635018>");
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");
			}
			else if(hasRun == false) {
				hasRun = true;
				message.react("😝");
				message.react("🤨");
				message.react("🤬");
				message.react("🤡");
				message.react("🦄");
				message.react("🍆");

				switch (Math.floor(Math.random() * Math.floor(10))) {
				case 0:
					message.reply("CRACKHEAD CRACKHEAD CRACKHEAD");
					break;
				case 1:
					message.reply("According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway. Because bees don’t care what humans think is impossible.” SEQ. 75 - “INTRO TO BARRY” INT. BENSON HOUSE - DAY ANGLE ON: Sneakers on the ground. Camera PANS UP to reveal BARRY BENSON’S BEDROOM ANGLE ON: Barry’s hand flipping through different sweaters in his closet. BARRY Yellow black, yellow black, yellow black, yellow black, yellow black, yellow black...oohh, black and yellow... ANGLE ON: Barry wearing the sweater he picked, looking in the mirror. BARRY (CONT’D) Yeah, let’s shake it up a little. He picks the black and yellow one. He then goes to the sink, takes the top off a CONTAINER OF HONEY, and puts some honey into his hair. He squirts some in his mouth and gargles. Then he takes the lid off the bottle, and rolls some on like deodorant. CUT TO: INT. BENSON HOUSE KITCHEN - CONTINUOUS Barry’s mother, JANET BENSON, yells up at Barry. JANET BENSON Barry, breakfast is ready! CUT TO: \"Bee Movie\" - JS REVISIONS 8/13/07 1. INT. BARRY’S ROOM - CONTINUOUS BARRY Coming! SFX: Phone RINGING. Barry’s antennae vibrate as they RING like a phone. Barry’s hands are wet. He looks around for a towel. BARRY (CONT’D) Hang on a second! He wipes his hands on his sweater, and pulls his antennae down to his ear and mouth. BARRY (CONT'D) Hello? His best friend, ADAM FLAYMAN, is on the other end. ADAM Barry? BARRY Adam? ADAM Can you believe this is happening? BARRY Can’t believe it. I’ll pick you up. Barry sticks his stinger in a sharpener. SFX: BUZZING AS HIS STINGER IS SHARPENED. He tests the sharpness with his finger. SFX: Bing. BARRY (CONT’D) Looking sharp. ANGLE ON: Barry hovering down the hall, sliding down the staircase bannister. Barry’s mother, JANET BENSON, is in the kitchen. JANET BENSON Barry, why don’t you use the stairs? Your father paid good money for those.");
					break;
				case 2:
					message.reply("We're no strangers to love \
			\nYou know the rules and so do I \
			\nA full commitment's what I'm thinking of \
			\nYou wouldn't get this from any other guy \
			\nI just wanna tell you how I'm feeling \
			\nGotta make you understand \
			\nNever gonna give you up \
			\nNever gonna let you down \
			\nNever gonna run around and desert you \
			\nNever gonna make you cry \
			\nNever gonna say goodbye \
			\nNever gonna tell a lie and hurt you \
			\nWe've known each other for so long \
			\nYour heart's been aching but you're too shy to say it \
			\nInside we both know what's been going on \
			\nWe know the game and we're gonna play it \
			\nAnd if you ask me how I'm feeling \
			\nDon't tell me you're too blind to see \
			\nNever gonna give you up \
			\nNever gonna let you down \
			\nNever gonna run around and desert you \
			\nNever gonna make you cry \
			\nNever gonna say goodbye \
			\nNever gonna tell a lie and hurt you \
			\nNever gonna give you up \
			\nNever gonna let you down \
			\nNever gonna run around and desert you \
			\nNever gonna make you cry \
			\nNever gonna say goodbye \
			\nNever gonna tell a lie and hurt you \
			\nNever gonna give, never gonna give \
			\n(Give you up) \
			\n(Ooh) Never gonna give, never gonna give \
			\n(Give you up) \
			\nWe've known each other for so long \
			\nYour heart's been aching but you're too shy to say it \
			\nInside we both know what's been going on \
			\nWe know the game and we're gonna play it \
			\nI just wanna tell you how I'm feeling \
			\nGotta make you understand \
			\nNever gonna give you up \
			\nNever gonna let you down \
			\nNever gonna run around and desert you \
			\nNever gonna make you cry \
			\nNever gonna say goodbye \
			\nNever gonna tell a lie and hurt you \
			\nNever gonna give you up \
			\nNever gonna let you down \
			\nNever gonna run around and desert you \
			\nNever gonna make you cry \
			\nNever gonna say goodbye \
			\nNever gonna tell a lie and hurt you \
			\nNever gonna give you up \
			\nNever gonna let you down \
			\nNever gonna run around and desert you \
			\nNever gonna make you cry \
			");
					break;
				case 3:
					message.reply("~~:.|:;~~");
					break;
				case 4:
					message.reply("Robbie: \"Are you, uh, a real villain?\" \
			\nBobbie: \"Well, uh, technically... nah.\" \
			\nRobbie: \"Have you ever caught a good guy, like, uh, like a real superhero?\" \
			\nBobbie: \"Nah.\" \
			\nRobbie: \"Have you ever tried a disguise?\" \
			\nBobbie: \"Nah, nah...\" \
			\nRobbie: \"Alright! I can see that I will have to teach you how to be villains!\" \
			\nHey! \
			\nWe are Number One \
			\nHey! \
			\nWe are Number One \
			\nNow listen closely \
			\nHere's a little lesson in trickery \
			\nThis is going down in history \
			\nIf you wanna be a Villain Number One \
			\nYou have to chase a superhero on the run \
			\nJust follow my moves, and sneak around \
			\nBe careful not to make a sound \
			\n(Shh) \
			\n(No, don't touch that!) \
			\nWe are Number One \
			\nHey! \
			\nWe are Number One \
			\nWe are Number One \
			\nHa ha ha \
			\nNow look at this net, that I just found \
			\nWhen I say go, be ready to throw \
			\nGo! \
			\n(Throw it on him, not me!) \
			\n(Ugh, let's try something else) \
			\nNow watch and learn, here's the deal \
			\nHe'll slip and slide on this banana peel! \
			\n(Ha ha ha, gasp! what are you doing!?) \
			\nBa-ba-biddly-ba-ba-ba-ba, ba-ba-ba-ba-ba-ba-ba \
			\nWe are Number One \
			\nHey! \
			\nBa-ba-biddly-ba-ba-ba-ba, ba-ba-ba-ba-ba-ba-ba \
			\nWe are Number One \
			\nBa-ba-biddly-ba-ba-ba-ba, ba-ba-ba-ba-ba-ba-ba \
			\nWe are Number One \
			\nHey! \
			\nBa-ba-biddly-ba-ba-ba-ba, ba-ba-ba-ba-ba-ba-ba \
			\nWe are Number One \
			\nHey! \
			\nHey!");
					break;
				case 5:
					message.reply("If you're receiving this message, then congrats! You've managed to *try* and leap through the cracks in my lack of research, and didn't use any terms I had accounted for. No worries, though, because that doesn't mean that I have nothing to say! I have planned a message that *will* me sent in such a case! care to read it? :\n>If you're receiving this message, then congrats! You've managed to *try* and leap through the cracks in my lack of research, and didn't use any terms I had accounted for. No worries, though, because that doesn't mean that I have nothing to say! I have planned a message that *will* me sent in such a case! care to read it? :\n>If you're receiving this message, then congrats! You've managed to *try* and leap through the cracks in my lack of research, and didn't use any terms I had accounted for. No worries, though, because that doesn't mean that I have nothing to say! I have planned a message that *will* me sent in such a case! care to read it? :\n>If you're receiving this message, then congrats! You've managed to *try* and leap through the cracks in my lack of research, and didn't use any terms I had accounted for. No worries, though, because that doesn't mean that I have nothing to say! I have planned a message that *will* me sent in such a case! care to read it?");
					break;
				case 6:
					message.reply("Did you try any of my ccool commands? You can use //tease, /purge, //ead or //cyword for example. Go ahead, give it a try =3 - This was an advertisement paid for by Crackheads of Discord in assocaiation with The Comrade Committee <3");
					break;
				case 7:
					message.reply("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
					break;
				case 8:
					message.reply("This is an example text. In this example text, you will read anexample. This example text has been wrotten in order to show you what a text looks like, and it shall be read with extreme care, for it has taken many centuries for this sacred example text to be concieved. The author of this example text is Unknown. We know who Unknown is, his name is Unknown Jones and he lives in the Bahamas. This has been an example text, thank you for readiong through it. If you didnt, I will scream in your sleep at night.");
					break;
				case 9:
					message.reply("");
					break;
				case 10:
					message.reply("Ripped Pants \
			\n Μπομπ Σφουγγαράκης Τετραγωνοπαντελονής - Spongebob Squarepants (Yes thst *IS* his name in Greek) \
			\n I thought I had everybody on my side \
			\n But I went and blew it all sky high \
			\n And now, she won't even spare a passing glance \
			\n All just because I... ripped my pants \
			\n When Big Larry came round just to put him down \
			\n Spongebob turned into a clown \
			\n And no girl ever wants to dance \
			\n With a fool who went and... ripped his pants \
			\n I know, I shouldn't mope around, I shouldn't curse \
			\n But the pain feels so much worse \
			\n 'Cause windin' up with no one is a lot less fun \
			\n Than a burn from the sun or sand in your buns! \
			\n Now, I learned a lesson, I won't soon forget \
			\n So listen and you won't regret \
			\n Be true to yourself, don't miss your chance \
			\n And you won't end up like the fool who ripped his pants");
					break;
				}
			}
		}
	}


	if (!command) return;

	if (command.guildOnly && message.channel.type !== "text") {
		return message.reply("I can't execute that command inside DMs!");
	}


	if (command.args && !args.length) {

		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);

	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);


	try {
		target, targetName = command.execute(message, command, args, target, targetName);
	}
	catch (error) {
		console.error(error);
		message.reply("there was an error trying to execute that command!");
	}

});

client.login(token);
