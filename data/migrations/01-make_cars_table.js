exports.up = function (knex) {
  return knex.schema
    .createTable('cars', table => {
      table.increments('id')
      table.text('vin')
        .unique()
        .notNullable()
      table.text('make')
        .unique()
      table.text('model')
        .unique()
      table.decimal('mileage')
        .unique()
      table.text('title')
      table.text('transmission')
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('cars')
};
