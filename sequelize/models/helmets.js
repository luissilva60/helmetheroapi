const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('helmet', {
        helmet_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },
        helmet_name: {
            type: DataTypes.STRING(60),
            allowNull: false
        }

    })
}


