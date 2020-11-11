module.exports = {
	name: "beep",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: ["pingop", "poping"],
	description: "Png but for OP users - to checkfor OP perms.",
	guildOnly: true,
	// execute(message, args) {
	execute(message) {
		if (message.member.roles.cache.has(global.adminRole) == true) {
			message.channel.send("Boop!");
		}
		else {
			console.log("User isn't admin or there was an error executing the command!");
			message.reply("You don't have OP permissions! Only users with OP permissions are allowed to execute that command!");
		}
	},
};
