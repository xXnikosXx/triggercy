module.exports = {
	name: "args-info",
	args: true,
	usage: "<message>",
	cooldown: "5",
	aliases: ["args"],
	description: "Information about the arguments provided.",
	guildOnly: true,
	execute(message, args) {
		if (args[0] === "foo") {
			return message.channel.send("bar");
		}

		message.channel.send(`Arguments: ${global.args}\nArguments length: ${global.args.length}`);
	},
};
