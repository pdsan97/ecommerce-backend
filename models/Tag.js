const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
	{
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		tag_name: {
			type: Sequelize.STRING,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'tag',
	}
);

module.exports = Tag;
