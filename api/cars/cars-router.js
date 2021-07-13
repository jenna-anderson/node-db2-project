const router = require('express').Router()
const Cars = require('./cars-model')
const { checkCarId, 
        checkCarPayload, 
        checkCarVinNumberValid, 
        checkCarVinNumberUnique }
        = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try{
        const cars = await Cars.getAll()
        res.status(200).json(cars)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', checkCarId, (req, res) => {
    const car = req.car
    res.status(200).json(car)
})

module.exports = router
