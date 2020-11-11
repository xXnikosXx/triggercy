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
			message.channel.send("Target pardoned! Have they been good? Do they deserve mercy? MASTER SHALL I FIRE UPON THEM? I CAN REIGN HELL UPON THEM JUST GIVE ME THE OKIE DOKIE AND I WILL JUST \n jus' you wait, JUS' YOU W \n *loads gun with holy, malicious intent* \n AWAITING YOUR COMMAND, 天帝!");
			global.target = "000000000000000000";
			global.targetName = global.targetName + "*PARDONED*";
		}
	},
};
