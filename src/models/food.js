'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('Food', {
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Food;