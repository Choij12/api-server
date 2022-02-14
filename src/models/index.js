'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const FoodModel = require('./food.js');
const ClothesModel = require('./clothes.js');
const ChannelModel = require('./channel.js');
const MessageModel = require('./message.js');

console.log(process.env.NODE_ENV);

let DATABASE_URL = process.env.DATA_URL || 'sqlite:memory';

const options = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
  : {};

let sequelizeInstance = new Sequelize(DATABASE_URL, options);


const food = FoodModel(sequelizeInstance, DataTypes);
const clothes = ClothesModel(sequelizeInstance, DataTypes);
const messages = MessageModel(sequelizeInstance, DataTypes);
const channels = ChannelModel(sequelizeInstance, DataTypes);


module.exports = {
  db: sequelizeInstance,
  food,
  clothes,
  channels,
  messages,
};