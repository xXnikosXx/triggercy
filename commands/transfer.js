module.exports = {
	name: "transfer",
	args: true,
	usage: "-",
	cooldown: "5",
	aliases: ["balsend", "send"],
	description: "Send money to other users",
	guildOnly: false,
	// execute(message, args) {
	execute(message) {
		const currentAmount = global.currency.getBalance(message.author.id);
		const transferAmount = global.commandArgs.split(/ +/).find(arg => !/<@!?\d+>/.test(arg));
		const transfercurTarget = message.mentions.users.first();

		if (!transferAmount || isNaN(transferAmount)) return message.channel.send(`Sorry ${message.author}, that's an invalid amount`);
		if (transferAmount > currentAmount) return message.channel.send(`Sorry ${message.author} you don't have that much.`);
		if (transferAmount <= 0) return message.channel.send(`Please enter an amount greater than zero, ${message.author}`);

		global.currency.add(message.author.id, -transferAmount);
		global.currency.add(transfercurTarget.id, transferAmount);

		return message.channel.send(`Successfully transferred ${transferAmount}💰 to ${transfercurTarget.tag}. Your current balance is ${global.currency.getBalance(message.author.id)}💰`);
	},
};
