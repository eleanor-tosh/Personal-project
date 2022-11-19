const knex = require('knex')
const config = require('./knexfile').development
const connection = knex(config)

module.exports = { getDogs, addDog, patchDog, patchPoints, getOwners, getShows }

function getDogs(db = connection) {
  return db('dogs').select()
}

function getOwners(db = connection) {
  return db('owners').select()
}

function getShows(db = connection) {
  return db('show').select()
}

function addDog(dog, db = connection) {
  return db('dogs').insert(dog)
}

function patchDog(
  dog_id,
  dog_name,
  reg_name,
  owner_name,
  fly_num,
  DOB,
  height_mm,
  height_category,
  grade,
  db = connection
) {
  return db('dogs').where('dog_id', dog_id).update({
    dog_name,
    reg_name,
    owner_name,
    fly_num,
    DOB,
    height_mm,
    height_category,
    grade,
  })
}

function patchPoints(
  dog_id,
  beg_points,
  int_points,
  sen_points,
  adv_points,
  db = connection
) {
  return db('dogs')
    .where('dog_id', dog_id)
    .update({ beg_points, int_points, sen_points, adv_points })
}
