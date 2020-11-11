module.exports = {
	name: "test",
	description: "Test command - used for bot development",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: [],
	guildOnly: false,
	// execute(message, args) {
	execute(message) {
		const exampleEmbedOne = new global.Discord.MessageEmbed()
			.setColor("#11df8a")
			.setTitle("~Video Embed test~")
			.setURL("https://www.google.com/")
			.setAuthor("youtube channel's name", "https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/33/69/0d/33690d8a-3657-6269-2dd4-fb81e9842bd5/logo_youtube_color-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png", "https://youtube.com/")
			.setDescription("Video descripion here")
			.setThumbnail("https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube_icon_full-color.svg?cache=f2ec7a5")
			.addFields(
				{ name: "Duration", value: "Video duration" },
			)
			.addField("Inline field title", "Some value here", true)
			.setTimestamp()
			.setFooter("Enjoy your video =3");

		message.channel.send(exampleEmbedOne);
		message.channel.send("https://www.youtube.com/watch?v=2NK6ipvaVio");

	},
};
