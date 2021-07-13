require('express')
const Cars = require('./cars-model')

const checkCarId = async (req, res, next) => {
  try{
    const { id } = req.params
    const car = await Cars.getById(id)
    if(!car){
      next({
        status: 404,
        message: `car with id ${id} is not found`
      })
    } else {
      req.car = car
      next()
    }
  }
  catch(err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body
  if(!vin){
    next({
      status: 400,
      message: 'vin is missing'
    })
  }
  if(!make){
    next({
      status: 400,
      message: 'make is missing'
    })
  }
  if(!model){
    next({
      status: 400,
      message: 'model is missing'
    })
  }
  if(!mileage){
    next({
      status: 400,
      message: 'mileage is missing'
    })
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
