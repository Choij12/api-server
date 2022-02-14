'use strict';

const express = require('express');

const app = express();

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator');

const _404 = require('./error-handlers/404');
const _500 = require('./error-handlers/500');

const apiRouter = require('./routes/api.js');

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.use('/api', apiRouter);
app.use(validator);
app.use(_404);
app.use(_500);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`Server is running on PORT ${port}.`));
  },
};