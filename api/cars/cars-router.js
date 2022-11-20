const Car = require('./cars-model');
const router = express().Router();


router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll();
        res.json(200).json(cars);
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