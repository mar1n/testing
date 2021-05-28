const tankModel = require('./tank');

module.exports.create = async (product) => {
    if(!product)
        throw new Error('Missing product');

        await tankModel.create(product);
};