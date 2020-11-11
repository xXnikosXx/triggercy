module.exports = {
	name: "ping",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: [],
	description: "Pong!",
	guildOnly: false,
	execute(message, args) {
		message.channel.send("Pong.");
	},
};
