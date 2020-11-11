// Require Sequelize
const Sequelize = require("sequelize");


const sequelize = new Sequelize("database", "username", "password", {
	host: "localhost",
	dialect: "sqlite",
	logging: false,
	// SQLite only
	storage: "database.sqlite",
});

const CurrencyShop = sequelize.import("models/CurrencyShop");
sequelize.import("models/Users");
sequelize.import("models/UserItems");

const force = process.argv.includes("--force") || process.argv.includes("-f");

// Item Shop
sequelize.sync({ force }).then(async () => {
	const shop = [
		CurrencyShop.upsert({ name: "item a", cost: 0 }),
		CurrencyShop.upsert({ name: "item b", cost: 160 }),
		CurrencyShop.upsert({ name: "item c", cost: 450 }),
		CurrencyShop.upsert({ name: "item d", cost: 450 }),
		CurrencyShop.upsert({ name: "item e", cost: 480 }),
		CurrencyShop.upsert({ name: "item f", cost: 690 }),
		CurrencyShop.upsert({ name: "item g", cost: 100 }),
		CurrencyShop.upsert({ name: "item h", cost: 15 }),
		CurrencyShop.upsert({ name: "item i", cost: 0 }),
		CurrencyShop.upsert({ name: "item j", cost: 700 }),
	];
	global.shop = shop;
	await Promise.all(shop);
	console.log("Database synced");
	sequelize.close();
}).catch(console.error);
