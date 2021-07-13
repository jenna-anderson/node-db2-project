const db = require('../../data/db-config')

const getAll = async () => {
  const cars = await db('cars').orderBy('id')
  return cars
}

const getById = async id => {
  const [car] = await db
    .select('make', 'mileage', 'model', 'title', 'transmission', 'vin')
    .from('cars')
    .where('id', id)
  return car
}

const create = () => {
  console.log("success")
}

module.exports = {
  getAll,
  getById,
  create
}
