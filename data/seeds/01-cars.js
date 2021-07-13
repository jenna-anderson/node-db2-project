exports.seed = function(knex) {
    return knex('cars').truncate()
        .then(function () {
            return knex('cars').insert([
                {
                    vin:'3FA6P0K91ER235764', 
                    make:'toyota', 
                    model:'camry', 
                    mileage: 123
                },
                {
                    vin:'1G1AD5F51A7154338', 
                    make:'toyota', 
                    model:'echo', 
                    mileage: 234, 
                    title: 'clean'},
                {
                    vin:'WAUGD68D6WA099372', 
                    make:'honda', 
                    model:'accord', 
                    mileage: 567, 
                    transmission: 'automatic'
                }
            ])
        })
}