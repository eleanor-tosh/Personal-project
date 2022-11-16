const knex = require('knex')
const config = require('./knexfile').development
const connection = knex(config)

function getDogs(db = connection) {
  return db('dogs').select()
}

module.exports = { getDogs }
