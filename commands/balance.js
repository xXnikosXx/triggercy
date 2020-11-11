module.exports = {
	name: "balance",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: ["bal"],
	description: "undefined =3",
	guildOnly: false,
	// execute(message, args) {
	execute(message) {
		const target = message.mentions.users.first() || message.author;
		return message.channel.send(`${target.tag} has ${global.currency.getBalance(target.id)}💰`);
	},
};
