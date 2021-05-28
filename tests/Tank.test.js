const mongoose = require('mongoose');

const dbHandler = require('./db-handler');
const productService = require('../db/models/services');
const productTunk = require('../db/models/tank');

beforeAll(async () => await dbHandler.connect());

afterEach(async () => await dbHandler.clearDatabase());

afterAll(async () => await dbHandler.closeDatabase());

describe('product', () => {
    it('can be created correctly', async () => {
        expect(async () => await productService.create(productComplete))
        .not
        .toThrow();
    });
});

const productComplete = {
    name: 'Szymon',
    size: 'small'
};