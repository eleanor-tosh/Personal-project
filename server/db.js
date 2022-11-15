const knex = require('knex')
const config = require('./knexfile').development
const connection = knex(config)

function getDog(db = connection) {
  return db('dogs').select()
}

module.exports = { getDog }
