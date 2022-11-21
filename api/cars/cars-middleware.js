const Car = require('./cars-model');


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
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports =
{
  checkCarId,
  checkCarPayload
}

