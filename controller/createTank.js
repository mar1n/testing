const { model } = require('mongoose');
const Tank = require('../db/models/tank');

model.exports = async function createTank(name, size) {
    try {
        const existingTank = await Tank.findOne({name:name});
        if(existingTank) throw new Error(`A Tank with the name ${name} already exists.`);
        const newTank = new Tank({
            name,
            size
        });
        await newTank.save();

        return {
            tankId: newTank._id
        }
    } catch (err) {
        throw err
    }
}