module.exports = {
	name: "userinfo",
	description: "Display user's (message author) info!",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: ["user"],
	guildOnly: false,
	// execute(message, args) {
	execute(message) {
		message.channel.send(`Your username is: ${message.author.username} \nYour ID(tag) is: ${message.author.tag} \nYour unique Snowflake is: ${message.author.id}`);
	},
};
