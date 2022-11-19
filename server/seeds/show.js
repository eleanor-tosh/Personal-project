/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('show').del()
  await knex('show').insert([
    {
      show_id: 1,
      host_club: 'Southern Fly',
      location: 'Forrester Park, Dunedin',
      date: 'new Date(Date.now())',
      setup_time: '9:00am',
      entries_by: '9:30am',
      start_time: '10:00am',
      entryA_cost: '3',
      entryB_cost: '4',
      cont_name: 'Frank Flyer',
      cont_email: 'frank.flyer@email.com',
      notes1: 'Intermediate-plate dependent on entry numbers/interest',
      notes2: 'Shared lunch, all welcome, please bring a plate',
    },
    {
      show_id: 2,
      host_club: 'Waimak DTC',
      location: '431 Mandeville Road, North Canterbury',
      date: 'new Date(Date.now())',
      setup_time: '9:00am',
      entries_by: '9:30am',
      start_time: '10:00am',
      entryA_cost: '3',
      entryB_cost: '4',
      cont_name: 'Deb Lindsay',
      cont_email: 'waimak.club@email.com',
      notes1: 'Intermediate-plate dependent on entry numbers/interest',
      notes2: 'Shared luunch, all welcome, please bring a plate',
    },
  ])
}
