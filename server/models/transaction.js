/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    ticker: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    units: {
        type: Number,
        required: true,
    },
    fees: {
        type: Number,
        required: true,
    },
});

transactionSchema.set('toJSON', {
    transform: (_, returnedObj) => {
        returnedObj.id = returnedObj._id.toString();
        delete returnedObj._id;
        delete returnedObj.__v;
    },
});

module.exports = mongoose.model('Transaction', transactionSchema);
