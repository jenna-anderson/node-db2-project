const router = require('express').Router()
const Cars = require('./cars-model')

router.get('/', async (req, res) => {
    const cars = await Cars.getAll()
    res.status(200).json(cars)
})

module.exports = router
