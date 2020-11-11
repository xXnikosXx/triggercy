// nodejs for filesystem
const fs = require("fs");
global.fs = fs;
const readline = require("readline");
global.readline = readline;
// require the discord.js module
const Discord = require("discord.js");
global.Discord = Discord;
// require canvas module for image manipulation
const Canvas = require("canvas");
// link to .json config file
const { prefix, token, adminRole } = require("./config.json");

const { Users, CurrencyShop } = require("./dbObjects");
global.Users = Users;
global.CurrencyShop = CurrencyShop;
const { Op } = require("sequelize");
global.Op = Op;
const currency = new Discord.Collection();
global.currency = currency;

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
global.adminRole = "ENTER_ROLE_ID_HERE";
let hasRun = false;

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

Reflect.defineProperty(currency, "add", {
	value: async function add(id, amount) {
		const user = currency.get(id);
		if (user) {
			user.balance += Number(amount);
			return user.save();
		}
		const newUser = await Users.create({ user_id: id, balance: amount });
		currency.set(id, newUser);
		return newUser;
	},
});

Reflect.defineProperty(currency, "getBalance", {
	value: function getBalance(id) {
		const user = currency.get(id);
		return user ? user.balance : 0;
	},
});

// event triggers only once, right after bot logs in
client.once("ready", async () => {
	console.log("Ready!");
	const storedBalances = await Users.findAll();
	storedBalances.forEach(b => currency.set(b.user_id, b));
	console.log(`Logged in as ${client.user.tag}!`);
	console.log(adminRole);
	client.user.setActivity("You", { type: "WATCHING" });

	client.user.setStatus("idle");

	// DM a User once bot is logged in and ready!
	client.users.fetch("ENTER_USER_ID_HERE").then((user) => {
		user.send("Bot's Up!");
	});
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
client.on("message", async message => {

	/* if (message.author == "SNOWFLAKE_HERE") {
		client.users.fetch("354155983146319874").then((user) => {
			user.send(message);
		});
	}
	if (message.author == "SNOWFLAKE_HERE") {
		client.users.fetch("287988318455726081").then((user) => {
			user.send(message);
		});
	} */

	/* delete a user's message and resend it (also do the same for atachments if any)
	if (message.author.bot) return false;

	if (message.channel.id == "id") {
		message.attachments.forEach(attachment => {
			let image = attachment.proxyURL;
			message.delete(message).then(() => {
				message.channel.send(image);
			});
		});

		if (message.content) {
			message.delete().then(() => {
				message.channel.send(message.content);
			});
		}
	}
	*/

	hasRun = false;
	currency.add(message.author.id, 1);

	// if (!message.content.startsWith(prefix) || message.author.bot) return;

	const input = message.content.slice(prefix.length).trim();
	global.input = input;
	let [, command, commandArgs] = input.match(/(\w+)\s*([\s\S]*)/);
	global.commandArgs = commandArgs;

	// log messages
	console.log(`<${message.author.tag}> ${message.content}`);

	// create an args var (const), that slices off the prefix entirely, removes the leftover whitespaces and then splits it into an array by spaces.
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	global.args = args;

	// Create a command variable by calling args.shift(), which will take the first element in array and return it
	// while also removing it from the original array (so that you don't have the command name string inside the args array).
	const commandName = args.shift().toLowerCase();
	command = client.commands.get(commandName) ||
		client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	global.command = command;

	if (message.author.id === global.target) {

		/* delete user's message and resend it (for anonymity reasons and so on) */

		// shift msg to lowercase, to use in trigger commands only instead of message.
		let msglow = message.content;
		// to make linter warning disappear >.<^
		msglow = message.content.toLowerCase();

		// splitting the message into arguements for better processing (to be used in code below)
		const splitMessage = msglow.slice().split(" ");
		console.log("splitMessage.length[" + splitMessage.length + "]");
		let i;
		for (i = 0; i < splitMessage.length; i++) {
			if (splitMessage[i] === "MESSAGE_HERE") {
				//bot action here
			}
			//else if....
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
