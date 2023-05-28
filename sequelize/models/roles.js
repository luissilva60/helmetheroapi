const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('roles', {
        role_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },
        role_name: {
            type: DataTypes.STRING(60),
            allowNull: false
        }

    })
}


