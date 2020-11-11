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
				message.reply(`Y-yes, Ssenpai :pleading_face:\n*points gun at @${message.author.tag}sama*\n **__Armed and loaded, M-master__** `);
				global.target = (message.author.id);
				global.targetName = (message.author.tag);
				target = global.target;
				targetName = global.targetName;
				message.reply(`N-new *QwQ* new ttarget's s-snowflake: ${target} (t-target is-s: ${targetName})`);
				return;
			}

			// grab the "first" mentioned user from the message
			// this will return a `User` object, just like `message.author`
			const taggedUser = message.mentions.users.first();

			message.reply(`Y-yes, Ssenpai :pleading_face:\n*points gun at @${taggedUser.tag}san*\n**__Armed and loaded, M-master`);
			global.target = (taggedUser.id);
			global.targetName = (taggedUser.tag);
			target = global.target;
			targetName = global.targetName;
			message.reply(`N-new *QwQ* new ttarget's s-snowflake: ${target} (t-target is-s: ${targetName})`);

			console.log(`Target has changed! New target ID: ${target} New target name: ${targetName}`);
			return;
		}
		else {
			console.log("User isn't admin or there was an error executing the command!");
			message.reply("You don't have OP permissions! Only users with OP permissions are allowed to execute that command!");
		}
	},
};
