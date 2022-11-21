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
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
