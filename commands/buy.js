module.exports = {
	name: "buy",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: ["purchase"],
	description: "buy",
	guildOnly: false,
	// execute(message, args) {
	async execute(message) {
		const item = await global.CurrencyShop.findOne({ where: { name: { [global.Op.like]: global.args } } });
		if (!item) return message.channel.send("That item doesn't exist.");
		if (item.cost > global.currency.getBalance(message.author.id)) {
			return message.channel.send(`You don't have enough currency, ${message.author}`);
		}

		const user = await global.Users.findOne({ where: { user_id: message.author.id } });
		global.currency.add(message.author.id, -item.cost);
		await user.addItem(item);

		message.channel.send(`You've bought a ${item.name}`);
	},
};
