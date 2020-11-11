module.exports = {
	name: "leaderboard",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: [""],
	description: "View credit leaderboard",
	guildOnly: false,
	// execute(message, args) {
	execute(message) {
		return message.channel.send(
			global.currency.sort((a, b) => b.balance - a.balance)
				.filter(user => global.client.users.cache.has(user.user_id))
				.first(10)
				.map((user, position) => `(${position + 1}) ${(global.client.users.cache.get(user.user_id).tag)}: ${user.balance}💰`)
				.join("\n"),
			{ code: true },
		);
	},
};
