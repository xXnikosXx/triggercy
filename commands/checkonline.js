module.exports = {
	name: "checkonline",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: ["online", "usersonline"],
	description: "Checks how many users are currently online in the server.",
	guildOnly: true,
	execute(message, args) {
		// First we use guild.members.fetch to make sure all members are cached
		message.guild.members.fetch().then(fetchedMembers => {
			const totalOnline = fetchedMembers.filter(member => member.presence.status === "online");
			// We now have a collection with all online member objects in the totalOnline variable
			message.channel.send(`There are currently ${totalOnline.size} members online in this guild!`);
		});
	},
};
