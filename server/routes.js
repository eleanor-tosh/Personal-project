const express = require('express')
const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getDogs()
    .then((dog) => {
      res.json(dog)
    })
    .catch(console.error)
})

router.get('/mydetails', (req, res) => {
  db.getOwners()
    .then((owner) => {
      res.json(owner)
    })
    .catch(console.error)
})

router.get('/shows', (req, res) => {
  db.getShows()
    .then((show) => {
      res.json(show)
    })
    .catch(console.error)
})

router.get('/poster/:show_id', (req, res) => {
  db.getShows()
    .then((show) => {
      res.json(show)
    })
    .catch(console.error)
})

router.get('/events', (req, res) => {
  db.getEvents()
    .then((event) => {
      res.json(event)
    })
    .catch(console.error)
})

//Add Dog
router.post('/', (req, res) => {
  const dog = req.body
  db.addDog(dog)
    .then(() => {
      return db.getDogs()
    })
    .then((dog) => {
      res.json(dog)
    })
    .catch(console.error)
})

//Add Show
router.post('/shows', (req, res) => {
  const show = req.body
  db.addShow(show)
    .then(() => {
      return db.getShows()
    })
    .then((show) => {
      res.json(show)
    })
    .catch(console.error)
})

//Delete Show
router.delete('/shows/:show_id', (req, res) => {
  const show_id = req.params.show_id
  db.deleteShow(show_id)
    .then(() => {
      return db.getShows()
    })
    .then((shows) => {
      res.json(shows)
    })
    .catch(console.error)
})

//Edit Dog Details
router.patch('/:dog_id', (req, res) => {
  const {
    dog_name,
    reg_name,
    owner_name,
    fly_num,
    DOB,
    active,
    height_mm,
    height_category,
    grade,
    beg_points,
    int_points,
    sen_points,
    adv_points,
  } = req.body
  const dog_id = req.params.dog_id
  db.patchDog(
    dog_id,
    dog_name,
    reg_name,
    owner_name,
    fly_num,
    DOB,
    active,
    height_mm,
    height_category,
    grade,
    beg_points,
    int_points,
    sen_points,
    adv_points
  )
    .then((result) => {
      console.log(result)
      return db.getDogs()
    })
    .then((dogs) => {
      res.json(dogs)
    })
    .catch(console.error)
})

module.exports = router
