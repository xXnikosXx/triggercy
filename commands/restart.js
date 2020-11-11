module.exports = {
	name: "restart",
	args: false,
	usage: "-",
	cooldown: "15",
	aliases: [],
	description: "Only by Bot Author - Restats/Terminates (run using PM2 to restart, terminate otherwise) node",
	guildOnly: false,
	// execute(message, args) {
	execute(message) {
		if (message.author.id === "287988318455726081") {
			message.author.send("Bot restarted!");
			message.reply("Bot ded!");

			process.exit();

		}
		else {
			message.reply("You dont have permission to restart.");
		}

	},
};
