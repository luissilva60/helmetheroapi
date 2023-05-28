const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('checkpoints', {
        checkpoint_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },
        checkpoint_gps: {
            type: DataTypes.GEOGRAPHY('POINT')
        }

    })
}


