module.exports = {
	name: "hi",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: ["hello"],
	description: "Trial targeted message.",
	guildOnly: false,
	// execute(message, args) {
	execute(message) {
		message.reply("who's high now? What? Who? Why? Where? Why high? Why not low? What does high even mean? Fuck, my head... Umm, pass that joint pls? kthanksbye~");
	},
};
