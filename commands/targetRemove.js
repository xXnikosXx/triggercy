module.exports = {
	name: "targetremove",
	description: "Pardon(forget) targetted user",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: ["pardon", "targetforget", "removetarget", "forgettarget"],
	guildOnly: true,
	// execute(message, args) {
	execute(message) {
		if (message.member.roles.cache.has(global.adminRole) == true) {
			message.channel.send("Target pardoned!");
			global.target = "000000000000000000";
			global.targetName = global.targetName + "*PARDONED*";
		}
	},
};
