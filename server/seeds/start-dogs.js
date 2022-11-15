/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('dogs').del()
  await knex('dogs').insert([
    {
      dog_id: 1,
      name: 'Holly',
      image: 'server/public/images/Holly.jpg',
      reg_name: 'Horrible Holly',
      fly_num: '15/813/1',
      DOB: '2011/11/27',
      height_mm: '286',
      height_category: 'micro',
      grade: 'Int-Sen',
      beg_points: '12',
      int_points: '16.5',
      sen_points: '8',
      adv_points: '0',
    },
    {
      dog_id: 2,
      name: 'Mera',
      image: 'server/public/images/Mera.jpg',
      reg_name: 'Mordor Logic in a Nightmare',
      fly_num: '15/',
      DOB: '2011/11/27',
      height_mm: '286',
      height_category: 'micro',
      grade: 'Int-Sen',
      beg_points: '12',
      int_points: '16.5',
      sen_points: '8',
      adv_points: '0',
    },
    {
      dog_id: 3,
      name: 'Siren',
      image: 'server/public/images/Siren-in-tiny-bed.jpg',
      reg_name: 'Siren',
      fly_num: '15/813/1',
      DOB: '2011/11/27',
      height_mm: '286',
      height_category: 'micro',
      grade: 'Int-Sen',
      beg_points: '12',
      int_points: '16.5',
      sen_points: '8',
      adv_points: '0',
    },
  ])
}
