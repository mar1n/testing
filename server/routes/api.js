const express = require('express');
const createTank = require('../../controller/createTank');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, size} = req.body;
    try{
        const { tankId } = await createTank(name, size);
        res.json({
            tankId
        });
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

module.export = router;