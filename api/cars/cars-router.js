const Car = require('./cars-model');
const mw = require('./cars-middleware');
const router = require('express').Router();


router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll();
        res.status(200).json(cars);
    }
    catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    const id = req.params.id
    try {
        const car = await Car.getById(id);
        res.status(200).json(car);
    }
    catch (err) {
        next(err);
    }
})

router.post('/', mw.checkCarPayload, async (req, res, next) => {
    const createdCar = req.body;
    try {
        const newCar = await Car.create(createdCar);
        res.status(201).json(newCar);
    }
    catch (err) {
        next(err)
    }
})

router.use('/', (err, req, res, next) => {
    res.status(500).json({
        message: "Could not process request at this time",
        err: err.message
    })
})


module.exports = router;