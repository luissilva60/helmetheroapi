const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('completed', {
        completed_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }

    })
}


