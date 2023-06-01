const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');

async function getAll(req, res) {
    try {
        const allcompleted = await models.completed.findAll({
            include: [models.trails, models.checkpoints, models.challenges]
        });
        res.status(200).json(allcompleted);
    }catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

async function getById(req, res) {
    const id = getIdParam(req);
    const completed = await models.completed.findByPk(id);
    if (completed) {
        res.status(200).json(completed);
    } else {
        res.status(404).send('404 - Not found');
    }
}

async function create(req, res) {
    if (req.body.id) {
        res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
    } else {
        try{
            await models.completed.create(req.body);
            res.status(201).end();
        }catch (e) {
            console.log(e)
            res.status(500).end()
        }
    }
}

async function update(req, res) {
    const id = getIdParam(req);

    // We only accept an UPDATE request if the `:id` param matches the body `id`
    if (req.body.completed_id === id) {
        await models.completed.update(req.body);
        res.status(200).end();
    } else {
        res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.completed_id}).`);
    }
}

async function remove(req, res) {
    const id = getIdParam(req);
    try{
        await models.completed.destroy({
            where: {
                completed_id: id
            }
        });
        res.status(200).end();
    }catch (e) {
        console.log("ERRO:" + e)
        res.status(500).end();
    }

}

async function getAllCompletedUser(req, res) {
    const id = getIdParam(req);
    try {
        const allcompleted = await models.completed.findAll({
            where:{
                completed_user_id: id
            },
            include: [models.trails, models.checkpoints, models.challenges]
        });
        res.status(200).json(allcompleted);
    }catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}


module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    getAllCompletedUser
}