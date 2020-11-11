module.exports = {
	name: "targetcheck",
	description: "Check for the current target!",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: ["checktarget"],
	guildOnly: false,
	// execute(message, args) {
	execute(message, target, targetName) {
		target = global.target;
		targetName = global.targetName;
		message.reply(`The current target is: ${targetName}(${target})`);
	},
};
