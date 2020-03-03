const pgp = require('pg-promise')({ 
    query: function(e) {
        console.log('QUERY', e.query);

    }
});

const options = {

    host: 'localhost',
    database: 'the_elite_review',
    user: 'macbook'

}

const db = pgp(options);

module.exports = db;
