const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const trail = sequelize.define('trails', {
        trail_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        trail_name: {
            type: DataTypes.STRING

        },
        trail_start: {
            type: DataTypes.GEOGRAPHY('POINT')

        },
        trail_end: {
            type: DataTypes.GEOGRAPHY('POINT')
        }
    });

    sequelize.sync();

    return trail;
};
