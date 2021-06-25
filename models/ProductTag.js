const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
	{
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		product_id: {
			type: Sequelize.INTEGER,
		},
		tag_id: {
			type: Sequelize.INTEGER,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'product_tag',
	}
);

module.exports = ProductTag;
