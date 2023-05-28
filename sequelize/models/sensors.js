const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Sensor = sequelize.define('sensors', {
        sensor_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        sensor_luz_1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sensor_luz_2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sensor_led_verm_1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sensor_led_verm_2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sensor_led_verm_3: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sensor_led_branco_1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sensor_led_branco_2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sensor_led_branco_3: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sensor_movimento: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sensor_temp: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        sensor_gps: {
            type: DataTypes.GEOGRAPHY('POINT'),
            allowNull: true
        },
        sensor_acc: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        sensor_rfid: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    sequelize.sync();

    return Sensor;
};
