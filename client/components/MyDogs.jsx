import { getDogs } from '../apiClient'
import React, { useState, useEffect } from 'react'

function MyDogs() {
  const [dog, setDog] = useState([])

  useEffect(() => {
    getDogs()
      .then((resDogs) => {
        setDog(resDogs)
      })
      .catch((err) => console.error(err.message))
  }, [])

  console.log(dog)

  return (
    <div>
      <h1>My Dogs</h1>

      {dog.map((dog) => {
        return (
          <div className="dog-card" key={dog.dog_id}>
            <img className="card-image" src={`/images/${dog.image}`} />
            <h2>{dog.name}</h2>
            <p>Registered Name: {dog.reg_name}</p>
            <p>Main Handler: {dog.owner_name}</p>
            <p>Flygility Number: {dog.fly_num}</p>
            <p>DOB: {dog.DOB}</p>
            <p>Height: {dog.height_mm}mm</p>
            <p>Height Category: {dog.height_category}</p>
            <p>Grade: {dog.grade}</p>

            <h2>Points</h2>
            <p>Beginner: {dog.beg_points}</p>
            <p>Intermediate: {dog.int_points}</p>
            <p>Senior: {dog.sen_points}</p>
            <p>Advanced: {dog.adv_points}</p>
            <p>Total: </p>
          </div>
        )
      })}
    </div>
  )
}

export default MyDogs
