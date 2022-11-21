const Car = require('./cars-model');
const vinValidator = require('vin-validator');
const db = require('../../data/db-config');


const checkCarId = async (req, res, next) => {
  const id = req.params.id;
  try {
    const car = Car.getById(id);
    if (!car) {
      res.status(404).json({
        message: `car with id ${id} is not found`
      })
    } else {
      next();
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
      stack: err.stack
    })
  }
}

const checkCarPayload = (req, res, next) => {
  for (let key in req.body) {
    if (key === null) {
      res.status(404).json({
        message: `${key} is missing`
      })
    } else {
      next();
    }
  }
}

const checkVinNumberValid = (req, res, next) => {
  const { vin } = req.body;
  const isValidVin = vinValidator.validate(vin);
  if (!isValidVin) {
    res.status(400).json({
      message: `vin number ${vin} is invalid`
    })
  } else {
    next();
  }
}

const checkVinNumberUnique = (req, res, next) => {
  const { vin } = req.body;
  db.select('vin')
    .from('cars')
    .where('vin', vin)
    .then((vinList) => {
      if (vinList.length > 0) {
        res.status(400).json({
          message: `vin ${vin} already exists`
        })
      } else {
        next();
      }
    })
}

module.exports =
{
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}

