/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('events').del()
  await knex('events').insert([
    { event_id: 1, show_id: 1, grade: 'beginner' },
    { event_id: 2, show_id: 1, grade: 'intermediate' },
    { event_id: 3, show_id: 1, grade: 'senior' },
    { event_id: 4, show_id: 1, grade: 'advanced' },
    { event_id: 5, show_id: 2, grade: 'beginner' },
    { event_id: 6, show_id: 2, grade: 'intermediate' },
    { event_id: 7, show_id: 2, grade: 'senior' },
    { event_id: 8, show_id: 2, grade: 'advanced' },
  ])
}
