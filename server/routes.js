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

module.exports = router
