module.exports = {
	name: "server",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: ["serverinfo"],
	description: "Displays Server Info!.",
	guildOnly: true,
	// execute(message, args) {
	execute(message) {
		message.channel.send(`The server name is: ${message.guild.name}`);
		message.channel.send(`The server's member count is: ${message.guild.memberCount}`);
	},
};
