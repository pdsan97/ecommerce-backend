const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
	{
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		category_name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'category',
	}
);

module.exports = Category;
