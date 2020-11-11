module.exports = {
	name: "argsinfo",
	args: true,
	usage: "<message>",
	cooldown: "5",
	aliases: ["args"],
	guildOnly: false,
	description: "display info about command arguements - used for bot testing",
	// execute(message, args) {
	execute(message, args, command) {
		if (!global.args.length) {
			return message.channel.send(`You didn't provide any arguements, ${message.author}`);
		}
		else if (global.args[0] === "foo") {
			return message.channel.send("bar");
		}

		message.channel.send(`Command name: ${command} \nArguements: ` + global.args);
	},
};
