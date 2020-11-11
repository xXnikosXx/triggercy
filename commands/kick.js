module.exports = {
	name: "kick",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: [],
	description: "Kick a user from the server.",
	guildOnly: true,
	execute(message, args) {
		if (message.member.roles.cache.has(global.adminRole) == true) {
			const member = message.mentions.members.first();
			message.channel.send("Are you sure you want to kick user " + member.tag + "? (yes/no)").then(() => {
				const filter = m => message.author.id === m.author.id;
				message.channel.awaitMessages(filter, {
					time: 60000,
					max: 1,
					errors: ["time"],
				})
					.then(messages => {
						"time";
						if (messages.first().content == "yes") {
							member.kick();
							message.reply("Kicked user " + member.tag + ".");
						}
						else {
							message.reply("Kick aborted!");
						}
					})
					.catch(() => {
						message.channel.send("You did not enter any input!");
					});
			});
		}
		else {
			message.reply("You don't have OP permissions or that user can't be kicked!");
		}
	},
};
