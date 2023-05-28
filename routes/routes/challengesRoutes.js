const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');

async function getAll(req, res) {
    try {
        const allchallenges = await models.challenges.findAll();
        res.status(200).json(allchallenges);
    }catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

async function getById(req, res) {
    const id = getIdParam(req);
    const challenge = await models.challenges.findByPk(id);
    if (challenge) {
        res.status(200).json(challenge);
    } else {
        res.status(404).send('404 - Not found');
    }
}

async function create(req, res) {
    if (req.body.id) {
        res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
    } else {
        try{
            await models.challenges.create(req.body);
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
    if (req.body.challenge_id === id) {
        await models.challenges.update(req.body);
        res.status(200).end();
    } else {
        res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.challenge_id}).`);
    }
}

async function remove(req, res) {
    const id = getIdParam(req);
    try{
        await models.challenges.destroy({
            where: {
                challenge_id: id
            }
        });
        res.status(200).end();
    }catch (e) {
        console.log("ERRO:" + e)
        res.status(500).end();
    }

}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
}