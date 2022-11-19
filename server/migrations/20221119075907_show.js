/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('show', function (table) {
    table.increments('show_id').primary()
    table.string('host_club')
    table.string('location')
    table.date('date')
    table.string('setup_time')
    table.string('entries_by')
    table.string('start_time')
    table.integer('entryA_cost')
    table.integer('entryB_cost')
    table.string('cont_name')
    table.string('cont_email')
    table.string('notes1')
    table.string('notes2')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('show')
}
