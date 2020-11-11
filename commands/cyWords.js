module.exports = {
	name: "cywords",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: ["cywords", "cywordcount"],
	description: "deth",
	guildOnly: false,
	// execute(message, args) {
	execute(message) {
		message.channel.send("Storytime: My Master, creator and D-daddy, @xXnikosXx, was just finished with finally writing the code and bugfixing, and all that was left for his amazing creation to be finished was to give me the ability to find certain words in Cy's messages and reply to them appropriately.");
		message.channel.send("He had a short ( stfu Cy! >:( ) list and he got some help by his friends, but it asn't enough. So, papi decided to find a better solution. He managed to log the chats of some channels and DMs into text files, and wrote a bot (she's my little sister and she's wonderful) to locate Cy's messages and save them in a seperate file, which he then passed through a word counter. The words in total where 312252 and the results where the following:");

		const msgEmbed = new global.Discord.MessageEmbed()
			.setColor("#00ff9c")
			.setTitle("Cy's beautiful word count")
			.setAuthor("TrigCy")
			.setDescription("from a sample size of 312252 words")
			.addFields(
				{ name: "Word Frequency Count:", value: "Master will share the file ONLY after Cy has allowed him to! >.<" },
			)
			.setTimestamp()
			.setFooter("we appreciate u Cy pls nu h8");

		message.channel.send(msgEmbed);
	},
};
