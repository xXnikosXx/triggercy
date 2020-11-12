module.exports = {
	name: "target",
	args: false,
	usage: "[user]",
	cooldown: "5",
	aliases: ["attack", "attacc"],
	description: "Point to user to attack - will target message author if no user is tagged",
	guildOnly: true,
	// execute(message, args) {
	execute(message, target, targetName) {
		if (message.member.roles.cache.has(global.adminRole) == true) {

			//	This will check if there are any users tagged. if not, the author will be targeted.
			if (!message.mentions.users.size) {
				message.reply(`**__Armed and loaded__** `);
				global.target = (message.author.id);
				global.targetName = (message.author.tag);
				target = global.target;
				targetName = global.targetName;
				message.reply(`New target's snowflake: ${target} (target is: ${targetName})`);
				return;
			}

			// grab the "first" mentioned user from the message
			// this will return a `User` object, just like `message.author`
			const taggedUser = message.mentions.users.first();

			message.reply(`Armed and loaded`);
			global.target = (taggedUser.id);
			global.targetName = (taggedUser.tag);
			target = global.target;
			targetName = global.targetName;
			message.reply(`New target's snowflake: ${target} (target is: ${targetName})`);

			console.log(`Target has changed! New target ID: ${target} New target name: ${targetName}`);
			return;
		}
		else {
			console.log("User isn't admin or there was an error executing the command!");
			message.reply("You don't have OP permissions! Only users with OP permissions are allowed to execute that command!");
		}
	},
};
