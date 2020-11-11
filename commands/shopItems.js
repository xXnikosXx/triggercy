module.exports = {
	name: "shopitems",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: ["items", "storeitems"],
	description: "List of all items purchaseable in the shop, followed by a short descriptionfor each!",
	guildOnly: false,
	// execute(message, args) {
	execute(message) {
		const msgEmbed = new global.Discord.MessageEmbed()
			.setColor("#29a6cc")
			.setTitle("Shop Items List:")
			.setAuthor("TrigCy")
			.setDescription("A list of all items purchaseable in the shop, followed by a short descriptionfor each! Only redeemable from the current target!")
			.addFields(
				{ name: "\u200B", value: "\u200B" },
				{ name: "Compliment (0)", value: "Nikos will compliment you", inline: true },
				{ name: "Wholesome insult (169)", value: "Nikos will wholesomely inslut you", inline: true },
				{ name: "\u200B", value: "\u200B" },
				{ name: "Dare (450)", value: "Nikos will do a dare - within reason", inline: true },
				{ name: "Truth(450)", value: "Nikos will answer a question truthfully - within reason", inline: true },
				{ name: "\u200B", value: "\u200B" },
				{ name: "Pardon (420420420)", value: "You will be prematurely pardoned", inline: true },
				{ name: "Troll (690)", value: "You will be trolled by Nikos", inline: true },
				{ name: "\u200B", value: "\u200B" },
				{ name: "Kneecaps (69420)", value: "I will give you my kneecaps.", inline: true },
				{ name: "'short' ticket (69696969)", value: "The penalty for using the word 'short' will be reduced by half on first use and to 0 on secnond use", inline: true },
				{ name: "\u200B", value: "\u200B" },
				{ name: "Appreciation (0)", value: "-", inline: true },
				{ name: "trigger (700)", value: "I will do my best to trigger you! =D", inline: true },
				{ name: "\u200B", value: "\u200B" },
			)
			.setTimestamp()
			.setFooter("we appreciate u Cy pls nu h8");

		message.channel.send(msgEmbed);
	},
};
/*

 */
