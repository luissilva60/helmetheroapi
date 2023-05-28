const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');
const connectionHost = "ec2-54-76-132-202.eu-west-1.compute.amazonaws.com"
const connectionPW = "5433343d3797e83769200119eda5399511d00ef9df9c7d682868e59b1d729c7e"
const connectionUser = "yqbjkzhuzzezfs"
const connectionPort = "5432"
const connectionDatabase = "d7mqnaojamm7jr"



/*const sequelize = new Sequelize(connectionUser, connectionDatabase, connectionPW, {
    host: connectionHost,
    port: connectionPort,
    dialect: 'postgres',
    logQueryParameters: true,
    benchmark: true,
    define: {
        timestamps: false
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    }

});*/


const sequelize = new Sequelize('postgres://yqbjkzhuzzezfs:5433343d3797e83769200119eda5399511d00ef9df9c7d682868e59b1d729c7e@ec2-54-76-132-202.eu-west-1.compute.amazonaws.com:5432/d7mqnaojamm7jr',{

        dialect: 'postgres',
        logQueryParameters: true,
        benchmark: true,
        define: {
            timestamps: false
        },
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        }
    })








const modelDefiners = [
    users = require('./models/users'),
    area = require('./models/area'),
    trails = require('./models/trails'),
    roles= require('./models/roles'),
    sensors = require('./models/sensors'),
    helmet = require('./models/helmet'),
    completed = require('./models/completed'),
    checkpoints = require('./models/checkpoints'),
    challenges = require('./models/challenges'),




    // Add more models here...
    // require('./models/item'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize, Sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;