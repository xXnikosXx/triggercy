module.exports = {
	name: "ban",
	args: false,
	usage: "<user>",
	cooldown: "5",
	aliases: ["banhammer"],
	description: "Ban a user from the server",
	guildOnly: true,
	execute(message, args) {
		if (message.member.roles.cache.has(global.adminRole) == true) {
			const user = message.mentions.users.first();
			message.channel.send("Are you sure you want to ban user " + user + "? (yes/no)").then(() => {
				const filter = m => message.author.id === m.author.id;
				message.channel.awaitMessages(filter, {
					time: 60000,
					max: 1,
					errors: ["time"],
				})
					.then(messages => {
						"time";
						if (messages.first().content == "yes") {
							global.channel.members.ban(user);
							message.reply("Banned user " + user.id + ".");
						}
						else {
							message.reply("Ban aborted!");
						}
					})
					.catch(() => {
						message.channel.send("You did not enter any input!");
					});
			});
		}
		else {
			console.log("User isn't admin or there was an error executing the command!");
			message.reply("You don't have OP permissions! Only users with OP permissions are allowed to execute that command!");
		}
	},
};
