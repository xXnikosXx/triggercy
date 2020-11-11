module.exports = {
	name: "ead",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: ["eatpp"],
	description: "undefined =3",
	guildOnly: false,
	// execute(message, args) {
	execute(message) {
		message.channel.send("no u!");
	},
};
