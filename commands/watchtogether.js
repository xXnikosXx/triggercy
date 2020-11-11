module.exports = {
	name: "watchtogether",
	args: false,
	usage: "//watchtogether [vid/time/day/plan/vp] [url url <url url url>/time(hh:mm:am/pm) time <time time time>/day(dd:mm) day <day day day>/url time day/days",
	cooldown: "5",
	aliases: ["watch", "wtc", "vid"],
	description: "Plan watch sessions / binge sessions with your friends!",
	guildOnly: true,
	execute(message, args) {
		args = global.args;

		const original_channel = message.channel;
		const filter = m => m.content.includes("custom");

		message.author.send("Message will be sent to: " + original_channel.name + "(" + original_channel.guild + ").");
		message.author.send("Enter the first title");

		message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ["time"] })
			.then(collected => {
				message.channel.send("The first suggested Title is: " + collected.first() + ". Vote for it below using the :one: emojii below.").then(sentMessage => {
					sentMessage.react("1️⃣");
					sentMessage.pin({ reason: "WatchTogether Title Vote Update" });
				});
				message.channel.send(collected.first());
			})
			.catch(collected => {
				message.channel.send("Timed out!");
			});

		/* msg.reply("The first suggested Title is: " + msg + ". Vote for it below using the :one: emojii below.").then(sentMessage => {
			sentMessage.react("1️⃣");
			sentMessage.pin({ reason: "WatchTogether Title Vote Update" });
		});	*/


		/*	*/


		/* if (args[0] == "vid") {
			if (args.length < 3 || args.length > 6) {
				message.reply("Invalid arguements amount (value out of bounds(2<=x<=5))");
			}
			else {
				switch (args.length) {
				case 3:
					message.channel.send(
						"The first movie suggestion is: " + args[1] + ". Vote for it below using the :one: emojii.\n" +
						"The second movie suggestion is: " + args[2] + ". Vote for it below using the :two: emojii.").then(sentMessage => {
						sentMessage.react("1️⃣");
						sentMessage.react("2️⃣");
						sentMessage.pin({ reason: "WatchTogether Vid Vote Update" });
					});
					break;
				case 4:
					message.channel.send(
						"The first movie suggestion is: " + args[1] + ". Vote for it below using the :one: emojii.\n" +
						"The second movie suggestion is: " + args[2] + ". Vote for it below using the :two: emojii.\n" +
						"The third movie suggestion is: " + args[3] + ". Vote for it below using the :three: emojii.").then(sentMessage => {
						sentMessage.react("1️⃣");
						sentMessage.react("2️⃣");
						sentMessage.react("3️⃣");
						sentMessage.pin({ reason: "WatchTogether Vid Vote Update" });
					});
					break;
				case 5:
					message.channel.send(
						"The first movie suggestion is: " + args[1] + ". Vote for it below using the :one: emojii.\n" +
						"The second movie suggestion is: " + args[2] + ". Vote for it below using the :two: emojii.\n" +
						"The third movie suggestion is: " + args[3] + ". Vote for it below using the :three: emojii.\n" +
						"The fourth movie suggestion is: " + args[4] + ". Vote for it below using the :four: emojii.").then(sentMessage => {
						sentMessage.react("1️⃣");
						sentMessage.react("2️⃣");
						sentMessage.react("3️⃣");
						sentMessage.react("4️⃣");
						sentMessage.pin({ reason: "WatchTogether Vid Vote Update" });
					});
					break;
				case 6:
					message.channel.send(
						"The first movie suggestion is: " + args[1] + ". Vote for it below using the :one: emojii.\n" +
						"The second movie suggestion is: " + args[2] + ". Vote for it below using the :two: emojii.\n" +
						"The third movie suggestion is: " + args[3] + ". Vote for it below using the :three: emojii.\n" +
						"The fourth movie suggestion is: " + args[4] + ". Vote for it below using the :four: emojii.\n" +
						"The fifth movie suggestion is: " + args[5] + ". Vote for it below using the :five: emojii.").then(sentMessage => {
						sentMessage.react("1️⃣");
						sentMessage.react("2️⃣");
						sentMessage.react("3️⃣");
						sentMessage.react("4️⃣");
						sentMessage.react("5️⃣");
						sentMessage.pin({ reason: "WatchTogether Vid Vote Update" });
					});
					break;

				}
			}
		} */
		if (args [0] == "time") {
			let regexbool = true;
			if (args.length < 3 || args.length > 6) {
				message.reply("Invalid arguements amount (value out of bounds(2<=x<=5))");
			}
			else {
				for(let i = 1; i >= 1 && i <= args.length && args[i] != null; i++) {
					if ((/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/).test(args[i]) == true && regexbool != false) {
						regexbool = true;
					}
					else {
						regexbool = false;
					}
				}
				if (regexbool == false) {
					message.reply ("Wront time format used or there was an error trying to execute that command. If the problem insists, contact a developer.");
				}
				else if (regexbool == true) {
					switch (args.length) {
					case 3:
						message.channel.send(
							"The first time frame is: " + args[1] + ". Vote for it below using the :one: emojii.\n" +
							"The second time frame is: " + args[2] + ". Vote for it below using the :two: emojii.").then(sentMessage => {
							sentMessage.react("1️⃣");
							sentMessage.react("2️⃣");
							sentMessage.pin({ reason: "WatchTogether Time Vote Update" });
						});
						break;
					case 4:
						message.channel.send(
							"The first time frame is: " + args[1] + ". Vote for it below using the :one: emojii.\n" +
							"The second time frame is: " + args[2] + ". Vote for it below using the :two: emojii.\n" +
							"The third time frame is: " + args[3] + ". Vote for it below using the :three: emojii.").then(sentMessage => {
							sentMessage.react("1️⃣");
							sentMessage.react("2️⃣");
							sentMessage.react("3️⃣");
							sentMessage.pin({ reason: "WatchTogether Time Vote Update" });
						});
						break;
					case 5:
						message.channel.send(
							"The first time frame is: " + args[1] + ". Vote for it below using the :one: emojii.\n" +
							"The second time frame is: " + args[2] + ". Vote for it below using the :two: emojii.\n" +
							"The third time frame is: " + args[3] + ". Vote for it below using the :three: emojii.\n" +
							"The fourth time frame is: " + args[4] + ". Vote for it below using the :four: emojii.").then(sentMessage => {
							sentMessage.react("1️⃣");
							sentMessage.react("2️⃣");
							sentMessage.react("3️⃣");
							sentMessage.react("4️⃣");
							sentMessage.pin({ reason: "WatchTogether Time Vote Update" });
						});
						break;
					case 6:
						message.channel.send(
							"The first time frame is: " + args[1] + ". Vote for it below using the :one: emojii.\n" +
							"The second time frame is: " + args[2] + ". Vote for it below using the :two: emojii.\n" +
							"The third time frame is: " + args[3] + ". Vote for it below using the :three: emojii.\n" +
							"The fourth time frame is: " + args[4] + ". Vote for it below using the :four: emojii.\n" +
							"The fifth time frame is: " + args[5] + ". Vote for it below using the :five: emojii.").then(sentMessage => {
							sentMessage.react("1️⃣");
							sentMessage.react("2️⃣");
							sentMessage.react("3️⃣");
							sentMessage.react("4️⃣");
							sentMessage.react("5️⃣");
							sentMessage.pin({ reason: "WatchTogether Time Vote Update" });
						});
						break;
					}
				}
			}
		}
		else if (args [0] == "day") {
			let regexbool = true;
			if (args.length < 3 || args.length > 6) {
				message.reply("Invalid arguements amount (value out of bounds(2<=x<=5))");
			}
			else {
				for(let i = 1; i >= 1 && i <= args.length && args[i] != null; i++) {
					if ((/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/).test(args[i]) == true && regexbool != false) {
						regexbool = true;
					}
					else {
						regexbool = false;
					}
				}
				if (regexbool == false) {
					message.reply ("Wront day format used or there was an error trying to execute that command. If the problem insists, contact a developer.");
				}
				else if (regexbool == true) {
					switch (args.length) {
					case 3:
						message.channel.send(
							"The first date is: " + args[1] + ". Vote for it below using the :one: emojii.\n" +
							"The second date is: " + args[2] + ". Vote for it below using the :two: emojii.").then(sentMessage => {
							sentMessage.react("1️⃣");
							sentMessage.react("2️⃣");
							sentMessage.pin({ reason: "WatchTogether Day Vote Update" });
						});
						break;
					case 4:
						message.channel.send(
							"The first date is: " + args[1] + ". Vote for it below using the :one: emojii.\n" +
							"The second date is: " + args[2] + ". Vote for it below using the :two: emojii.\n" +
							"The third date is: " + args[3] + ". Vote for it below using the :three: emojii.").then(sentMessage => {
							sentMessage.react("1️⃣");
							sentMessage.react("2️⃣");
							sentMessage.react("3️⃣");
							sentMessage.pin({ reason: "WatchTogether Day Vote Update" });
						});
						break;
					case 5:
						message.channel.send(
							"The first date is: " + args[1] + ". Vote for it below using the :one: emojii.\n" +
							"The second date is: " + args[2] + ". Vote for it below using the :two: emojii.\n" +
							"The third date is: " + args[3] + ". Vote for it below using the :three: emojii.\n" +
							"The fourth date is: " + args[4] + ". Vote for it below using the :four: emojii.").then(sentMessage => {
							sentMessage.react("1️⃣");
							sentMessage.react("2️⃣");
							sentMessage.react("3️⃣");
							sentMessage.react("4️⃣");
							sentMessage.pin({ reason: "WatchTogether Day Vote Update" });
						});
						break;
					case 6:
						message.channel.send(
							"The first date is: " + args[1] + ". Vote for it below using the :one: emojii.\n" +
							"The second date is: " + args[2] + ". Vote for it below using the :two: emojii.\n" +
							"The third date is: " + args[3] + ". Vote for it below using the :three: emojii.\n" +
							"The fourth date is: " + args[4] + ". Vote for it below using the :four: emojii.\n" +
							"The fifth date is: " + args[5] + ". Vote for it below using the :five: emojii.").then(sentMessage => {
							sentMessage.react("1️⃣");
							sentMessage.react("2️⃣");
							sentMessage.react("3️⃣");
							sentMessage.react("4️⃣");
							sentMessage.react("5️⃣");
							sentMessage.pin({ reason: "WatchTogether Day Vote Update" });
						});
						break;
					}
				}
			}
		}
		else if (args[0] == "vp") {
			if (args.length >= 3) {
				message.reply("Invalid arguements amount (value out of bounds(1))");
			}
			else if (args[1] <= 0 || args[1] > 10) {
				message.reply("Time value out of bounds(1 <= x <= 10)");
			}
			else {
				message.reply("Okay! Results will be announced in " + args[1] + " days!");
			}
		}
	},
};
/*

if (args[0] == "vid") {
	message.channel.send(args[3] + args[4]);
	if (args.length < 3 || args.length > 6) {
		message.reply("Invalid arguements amount (value out of bounds(2<=x<=5))");
	}
	switch (args.length) {
	case 3:
		message.channel.send(
			"The first movie suggestion is: " + args[3] + ". Vote for it below using the :one: emojii.\n" +
			"The second movie suggestion is:" + args[4] + ". Vote for it below usinf the :two: emojii.");
		break;
	case 4:
	case 5:
	case 6:

		break;
	default:

	}
}
else if (args [0] == "time") {
	message.channel.send(args[1] + args[2] + args[3] + args[4] + args[5]);
}
else if (args [0] == "day") {
	message.channel.send(args[1] + args[2] + args[3] + args[4] + args[5]);
}

*/

/*

switch (args.length) {
case 3:
	message.channel.send(
		"The first time frame is: " + args[1] + ". Vote for it below using the :one: emojii.\n" +
		"The second time frame is: " + args[2] + ". Vote for it below using the :two: emojii.").then(sentMessage => {
		sentMessage.react("1️⃣");
		sentMessage.react("2️⃣");
		sentMessage.pin({ reason: "WatchTogether Time Vote Update" });
	});
	break;
case 4:
	message.channel.send(
		"The first time frame is: " + args[1] + ". Vote for it below using the :one: emojii.\n" +
		"The second time frame is: " + args[2] + ". Vote for it below using the :two: emojii.\n" +
		"The third time frame is: " + args[3] + ". Vote for it below using the :three: emojii.").then(sentMessage => {
		sentMessage.react("1️⃣");
		sentMessage.react("2️⃣");
		sentMessage.react("3️⃣");
		sentMessage.pin({ reason: "WatchTogether Time Vote Update" });
	});
	break;
case 5:
	message.channel.send(
		"The first time frame is: " + args[1] + ". Vote for it below using the :one: emojii.\n" +
		"The second time frame is: " + args[2] + ". Vote for it below using the :two: emojii.\n" +
		"The third time frame is: " + args[3] + ". Vote for it below using the :three: emojii.\n" +
		"The fourth time frame is: " + args[4] + ". Vote for it below using the :four: emojii.").then(sentMessage => {
		sentMessage.react("1️⃣");
		sentMessage.react("2️⃣");
		sentMessage.react("3️⃣");
		sentMessage.react("4️⃣");
		sentMessage.pin({ reason: "WatchTogether Time Vote Update" });
	});
	break;
case 6:
	message.channel.send(
		"The first time frame is: " + args[1] + ". Vote for it below using the :one: emojii.\n" +
		"The second time frame is: " + args[2] + ". Vote for it below using the :two: emojii.\n" +
		"The third time frame is: " + args[3] + ". Vote for it below using the :three: emojii.\n" +
		"The fourth time frame is: " + args[4] + ". Vote for it below using the :four: emojii.\n" +
		"The fifth time frame is: " + args[5] + ". Vote for it below using the :five: emojii.").then(sentMessage => {
		sentMessage.react("1️⃣");
		sentMessage.react("2️⃣");
		sentMessage.react("3️⃣");
		sentMessage.react("4️⃣");
		sentMessage.react("5️⃣");
		sentMessage.pin({ reason: "WatchTogether Time Vote Update" });
	});
	break;

}

*/
