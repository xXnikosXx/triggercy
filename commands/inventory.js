module.exports = {
	name: "inventory",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: ["inv"],
	description: "display user's inventory",
	guildOnly: false,
	// execute(message, args) {
	async execute(message) {
		const curTarget = message.mentions.users.first() || message.author;
		const user = await global.Users.findOne({ where: { user_id: curTarget.id } });
		const items = await user.getItems();

		if (!items.length) return message.channel.send(`${curTarget.tag} has nothing!`);
		return message.channel.send(`${curTarget.tag} currently has ${items.map(t => `${t.amount} ${t.item.name}`).join(", ")}`);
	},
};
