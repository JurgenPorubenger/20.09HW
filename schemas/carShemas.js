const car = {

  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    price: {
      type: 'number',
    },
    mileage: {
      type: ['string', 'number'],
      pattern: '^[new]{3}$',

    },
    functions: {
      type: 'string',
      pattern: '/^[a-z]$/',
    },
  },
};


module.exports = car;
