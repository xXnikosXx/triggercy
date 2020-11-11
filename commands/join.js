module.exports = {
	name: "join",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: ["newuser"],
	description: "Fake join - to test commands that require a new member joining the server.",
	guildOnly: true,
	execute(message, args) {
		global.client.emit("guildMemberAdd", message.member);
	},
};
