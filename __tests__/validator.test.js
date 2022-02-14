'use strict';

const validator = require('../src/middleware/validator.js');
const _500 = require('../src/error-handlers/500.js');

describe('Testing the Validator middleware', () => {
  let request = {method: 'GET', query: {}};
  let response = {status: jest.fn()};
  let next = jest.fn(); 
  it('Should throw a 500 error if there is no name property', () => {
    request.query.name = undefined;
    validator(request, response, next);

    expect(next).toHaveBeenCalledWith(_500);
  });
});