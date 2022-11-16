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
      image: 'Holly.jpg',
      reg_name: 'Horrible Holly',
      owner_name: 'Eleanor Tosh',
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
      image: 'Mera.jpg',
      reg_name: 'Mordor Logic in a Nightmare',
      owner_name: 'Eleanor Tosh',
      fly_num: '15/813/2',
      DOB: '2014/12/29',
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
      name: 'Siren',
      image: 'Siren-in-tiny-bed.jpg',
      reg_name: 'Enchanted by the Siren Song',
      owner_name: 'Eleanor Tosh',
      fly_num: '',
      DOB: '2016/5/16',
      height_mm: '512',
      height_category: 'midi',
      grade: 'Beg-Int',
      beg_points: '0',
      int_points: '0',
      sen_points: '0',
      adv_points: '0',
    },
  ])
}
