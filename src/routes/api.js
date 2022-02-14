'use strict';

const express = require('express');
const router = express.Router();
const { messages, channels, food, clothes } = require('../models');

const Collection = require('../models/lib/Collection.js');

const modelMap = {
  messages: new Collection(messages),
  channels: new Collection(channels),
  food: new Collection(food),
  clothes: new Collection(clothes),
};

router.use('/:model', function (req, res, next) {

  
  const model = modelMap[req.params.model];
  console.log(model);

  if (!model) {
    next('No Model Found');
  }

  req.model = model;
  next();
});

router.get('/:model', async (req, res, next) => {
  const model = req.model;
  let records = await model.read();
  res.send(records);
});

router.get('/:model/:id', async (req, res, next) => {
  const model = req.model;
  const id = req.params.id;
  let record = await model.read(id);
  res.send(record);
});

router.post('/:model', async (req, res, next) => {
  const model = req.model;
  const json = req.body;
  let newRecord = await model.create(json);
  res.send(newRecord);
});

module.exports = router;