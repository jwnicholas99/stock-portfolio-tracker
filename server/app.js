const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config');

// Import routers and middleware
const transactionsRouter = require('./controllers/transactions');

const logger = require('./utils/logger');

logger.info(`Connecting to ${config.MONGODB_URI}`);

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(() => {
        logger.info('connected to MongoDB');
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message);
    });

const app = express();
app.use(express.json());
app.use(express.static('../client/build'));
app.use(cors());

// Use routers and middleware
app.use('/api/transactions', transactionsRouter);

module.exports = app;
