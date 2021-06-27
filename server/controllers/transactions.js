const transactionsRouter = require('express').Router();
const Transaction = require('../models/transaction');

transactionsRouter.get('/', (req, res) => {
    Transaction.find({})
        .then((transactions) => res.json(transactions));
});

transactionsRouter.post('/', (req, res) => {
    const transaction = new Transaction(req.body);

    transaction
        .save()
        .then((result) => {
            res.status(201).json(result);
        });
});

transactionsRouter.delete('/:id', (req, res) => {
    Transaction
        .findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        });
});

module.exports = transactionsRouter;
