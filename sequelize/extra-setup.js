function applyExtraSetup(sequelize) {
    const { users, trails, sensors, roles, helmet, completed, checkpoints, challenges, area } = sequelize.models;

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




    area.hasMany(trails, {
        foreignKey: 'trail_area_id'

    });




    trails.belongsTo(area ,{
        foreignKey:  'trail_area_id'

    });



    //sequelize.sync();



}

module.exports = { applyExtraSetup };