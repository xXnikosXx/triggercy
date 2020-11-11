module.exports = {
	name: "purge",
	args: false,
	usage: "<number>",
	cooldown: "5",
	aliases: ["prune", "msgdelete"],
	description: "Delete a certain amount of messages in a specific channe (1-100). NOTE: Can't be more than 2 weeks old!",
	guildOnly: false,
	// execute(message, args) {
	execute(message) {
		if (message.member.roles.cache.has(global.adminRole) == true) {

			const amount = parseInt(global.args[0]) + 1;

			if (isNaN(amount)) {
				return message.reply("That doesn't seem to be a valid number!");
			}
			else if(amount < 1 || amount > 100) {
				return message.reply("You need to enter a number between 1 and 100!");
			}

			message.channel.bulkDelete(amount, true).catch(err => {
				console.log(err);
				message.channel.send("There was an error trying to prune messages in this channel!");
			});
		}
	},
};
