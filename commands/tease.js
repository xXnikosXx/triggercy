module.exports = {
	name: "tease",
	description: "lood command- use at own risk =P",
	args: false,
	usage: "-",
	cooldown: "5",
	aliases: ["loodtease"],
	guildOnly: true,
	// execute(message, args) {
	execute(message) {
		if(!message.mentions.users.size) {
			return message.reply("Why tease yourself when you can tease others? try saying '//tease @user'");
		}
		const taggedUser = message.mentions.users.first();
		message.reply(`${taggedUser} shall be teased out of their mind for You!`);
		message.channel.send(`${taggedUser}, kneel down and praise your Master/Mistress!`);
	},
};
