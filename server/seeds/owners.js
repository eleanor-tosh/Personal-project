/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('owners').del()
  await knex('owners').insert([
    {
      owner_id: 100001,
      firstname: 'Eleanor',
      lastname: 'Tosh',
      email: 'something@outlook.com',
      cell: '12345678',
      club: 'Southern Fly',
      started: 'new Date(Date.now())',
    },
    {
      owner_id: 100002,
      firstname: 'Bob',
      lastname: 'Smith',
      email: 'otherthing@outlook.com',
      cell: '13434345',
      club: 'Southern Fly',
      started: 'new Date(Date.now())',
    },
    {
      owner_id: 100003,
      firstname: 'Flora',
      lastname: 'Doe',
      email: 'youremail@outlook.com',
      cell: '13453554',
      club: 'Southern Fly',
      started: 'new Date(Date.now())',
    },
  ])
}
