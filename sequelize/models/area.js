const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('area', {
        area_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },
        area_name: {
            type: DataTypes.STRING(60),

        },
        area_gps: {
            type: DataTypes.GEOMETRY,
        }

    })
}


