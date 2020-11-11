const Sequelize = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
	host: "localhost",
	dialect: "sqlite",
	logging: false,
	storage: "database.sqlite",
});

const CurrencyShop = sequelize.import("models/CurrencyShop");
sequelize.import("models/Users");
sequelize.import("models/UserItems");

const force = process.argv.includes("--force") || process.argv.includes("-f");

sequelize.sync({ force }).then(async () => {
	const shop = [
		CurrencyShop.upsert({ name: "Compliment", cost: 0 }),
		CurrencyShop.upsert({ name: "Wholesome insult", cost: 169 }),
		CurrencyShop.upsert({ name: "Dare", cost: 450 }),
		CurrencyShop.upsert({ name: "Truth", cost: 450 }),
		CurrencyShop.upsert({ name: "Pardon", cost: 420420420 }),
		CurrencyShop.upsert({ name: "Troll", cost: 690 }),
		CurrencyShop.upsert({ name: "kneecaps", cost: 69420 }),
		CurrencyShop.upsert({ name: "'short' ticket", cost: 69696969 }),
		CurrencyShop.upsert({ name: "Appreciation", cost: 0 }),
		CurrencyShop.upsert({ name: "trigger", cost: 700 }),
	];
	global.shop = shop;
	await Promise.all(shop);
	console.log("Database synced");
	sequelize.close();
}).catch(console.error);
