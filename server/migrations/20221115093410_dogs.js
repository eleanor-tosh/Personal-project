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
    table.integer('owner_id')
    table.integer('fly_num')
    table.date('DOB')
    table.integer('active')
    table.integer('height_mm')
    table.string('height_category')
    table.string('grade')
    table.integer('beg_points')
    table.integer('int_points')
    table.integer('sen_points')
    table.integer('adv_points')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('dogs')
}
