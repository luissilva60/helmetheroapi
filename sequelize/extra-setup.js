function applyExtraSetup(sequelize) {
    const { users, trails, sensors, roles, helmet, completed, checkpoints, challenges, areas } = sequelize.models;

    roles.hasOne(users, {
        foreignKey: 'user_role_id'

    });
    users.belongsTo(roles ,{
        foreignKey:  'user_role_id'

    });

    helmet.hasOne(sensors, {
        foreignKey: 'sensors_helmet_id'

    });
    sensors.belongsTo(helmet ,{
        foreignKey:  'sensors_helmet_id'

    });


    checkpoints.hasMany(completed, {
        foreignKey: 'completed_checkpoints_id'

    });
    completed.belongsTo(checkpoints ,{
        foreignKey:  'completed_checkpoints_id'

    });

    trails.hasMany(completed, {
        foreignKey: 'completed_trail_id'

    });
    completed.belongsTo(trails ,{
        foreignKey:  'completed_trail_id'

    });


    challenges.hasMany(completed, {
        foreignKey: 'completed_challenged_id'

    });
    completed.belongsTo(challenges ,{
        foreignKey:  'completed_challenged_id'

    });


    trails.hasMany(challenges, {
        foreignKey: 'challenge_trail_id'

    });
    challenges.belongsTo(trails ,{
        foreignKey:  'challenge_trail_id'

    });



    //sequelize.sync();



}

module.exports = { applyExtraSetup };