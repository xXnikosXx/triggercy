module.exports = {
	name: "op",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: ["opcheck"],
	description: "Check if user is OP - customised",
	guildOnly: true,
	// execute(message, args) {
	execute(message) {

		if (message.member.roles.cache.has(global.adminRole) == true) {
			console.log("Admin message!");
			message.channel.send(`User ${message.author.tag} has OP permissions!`);
		}
		else {
			console.log("User isn't admin or there was an error executing the command!");
			message.channel.send(`User ${message.author.tag} doesn't have OP permissions or there was an error executing the command!`);
		}

	},
};
