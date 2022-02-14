'use strict';

const logger = require('../src/middleware/logger.js');

describe('Testing the logging middleware.', () => {
  let request = { method: 'GET', path: '/food' };
  let response = {};
  let next = jest.fn();
  console.log = jest.fn();

  it('Should be able to log a method', () => {
    logger(request, response, next);

    expect(console.log).toHaveBeenCalledWith('GET /food');
    expect(next).toHaveBeenCalled();
  });

  it('Should throw an error when a PATCH method is called.', () => {
    request.method = 'PATCH';

    logger(request, response, next);
    expect(next).toHaveBeenCalledWith('Something went wrong.');
  });
});