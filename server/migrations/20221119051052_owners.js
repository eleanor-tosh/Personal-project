/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('owners', function (table) {
    table.increments('owner_id').primary()
    table.string('firstname')
    table.string('lastname')
    table.string('email')
    table.integer('cell')
    table.string('club')
    table.date('started')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('owners')
}
