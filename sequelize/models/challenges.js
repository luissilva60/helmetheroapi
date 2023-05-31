const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Challenge = sequelize.define('challenges', {
        challenge_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        challenge_name: {
            type: DataTypes.STRING
        },
        challenge_points: {
            type: DataTypes.INTEGER
        },
        challenge_gps: {
            type: DataTypes.GEOGRAPHY('POINT')
        }
    });

    return Challenge;
};
