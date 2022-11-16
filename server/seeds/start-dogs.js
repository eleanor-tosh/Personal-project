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
      dog_name: 'Holly',
      image: 'Holly.jpg',
      reg_name: 'Horrible Holly',
      owner_name: 'Eleanor Tosh',
      fly_num: '15/813/1',
      DOB: '27/9/2011',
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
      dog_name: 'Mera',
      image: 'Mera.jpg',
      reg_name: 'Mordor Logic in a Nightmare',
      owner_name: 'Eleanor Tosh',
      fly_num: '15/813/2',
      DOB: '29/12/2014',
      height_mm: '484',
      height_category: 'midi',
      grade: 'Int-Sen',
      beg_points: '13',
      int_points: '28',
      sen_points: '2',
      adv_points: '0',
    },
    {
      dog_id: 3,
      dog_name: 'Siren',
      image: 'Siren-in-tiny-bed.jpg',
      reg_name: 'Enchanted by the Siren Song',
      owner_name: 'Eleanor Tosh',
      fly_num: '',
      DOB: '16/5/2016',
      height_mm: '512',
      height_category: 'midi',
      grade: 'Beg-Int',
      beg_points: '212',
      int_points: '124',
      sen_points: '324',
      adv_points: '98',
    },
  ])
}
