const express = require("express")

const server = express()

const carsRouter = require('./cars/cars-router')

server.use('/api/cars', carsRouter)

server.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({
        message: err.message
    })
})

module.exports = server
