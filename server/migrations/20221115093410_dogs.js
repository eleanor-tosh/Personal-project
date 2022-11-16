/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('dogs', function (table) {
    table.increments('dog_id').primary()
    table.string('dog_name')
    table.string('image')
    table.string('reg_name')
    table.string('owner_name')
    table.integer('fly_num')
    table.date('DOB')
    table.integer('height_mm')
    table.string('height_category')
    table.string('grade')
    table.string('beg_points')
    table.string('int_points')
    table.string('sen_points')
    table.string('adv_points')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('dogs')
}
