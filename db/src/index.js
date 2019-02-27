const express = require('express');

const transactionsRouter = require('./routers/transactions');

const app = express();

app.use('/transactions', transactionsRouter)

// handle errors
app.use((error, _, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({ message: error.message });
  next();
});

module.exports = app;
