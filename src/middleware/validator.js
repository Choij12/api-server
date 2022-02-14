'use strict';

const _500 = require ('../error-handlers/500.js');

module.exports = (request, response, next) => {
  const query = request.query.name;
  if (query) {
    next();
  } else {
    next(_500);
  }
};