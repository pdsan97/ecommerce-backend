// import important parts of sequelize library
const { Model, DataTypes, Sequelize } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
	{
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		product_name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		price: {
			type: Sequelize.DECIMAL(20, 10),
		},
		stock: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 10 },
		category_id: {
			type: Sequelize.INTEGER,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'product',
	}
);

module.exports = Product;
