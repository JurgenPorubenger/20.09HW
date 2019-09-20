const express = require('express');

const router = express.Router();
const Ajv = require('ajv');
const carSchema = require('../schemas/carShemas');

const ajv = new Ajv();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});
router.post('/', (req, res, next) => {
  console.log(req.body);
  const validate = ajv.compile(carSchema);
  const valid = validate({
    price: req.body.price,
    mileage: req.body.mileage,
    functions: req.body.functions,
  });
  if (!valid) {
    const { errors } = validate;
    const result = {
      status: 'invalid data',
      payload: { errors },
    };
    res.json(result);
  }
});

module.exports = router;
