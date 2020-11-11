module.exports = {
	name: "shop",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: [""],
	description: "Shop",
	guildOnly: false,
	// execute(message, args) {
	async execute(message) {
		const items = await global.CurrencyShop.findAll();
		return message.channel.send(items.map(i => `${i.name}: ${i.cost}💰`).join("\n"), { code: true });
	},
};
