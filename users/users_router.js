const router = require('express').Router();
const Users = require('./users_model');

router.get('/', async (req, res) => {
    try {
        const users = await Users.find();
        res.json(users);
    }
    catch (err) {
        res.send({ message: "Try again later.", err })
    };
});

router.get('/:id', async(req, res) => {
    const { id } = req.params;

    try {
        const user = await Users.findById(id);
        res.json(user);
    }
    catch (err) {
        res.send({ message: "Try again later.", err })
    };
});

module.exports = router;