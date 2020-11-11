module.exports = {
	name: "msgfilter",
	description: "Instructions on how to use on command execution",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: [],
	guildOnly: false,
	// execute(message, args) {
	execute(message) {
		async function processLineByLine() {
			const fileStream = global.fs.createReadStream("./input.txt");

			const rl = global.readline.createInterface({
				input: fileStream,
				crlfDelay: Infinity,
			});

			let trigger = false;

			for await (const line of rl) {
				// Each line in input.txt will be successively available here as `line`.
				console.log(`Line from file: ${line}`);
				if (line.includes("YOU DID THIS TO MY BOI LIM#7483") == true) {
					console.log("true");
					trigger = true;
				}
				else if (trigger == true) {
					console.log(`Line sent by user: ${line}`);

					global.fs.appendFile("output.txt", line + " ", (err) => {
						// throws an error, you could also catch it here
						if (err) throw err;

						// success case, the file was saved
						console.log("line saved");
					});

					trigger = false;
				}
			}
		}

		processLineByLine();
	},
};
