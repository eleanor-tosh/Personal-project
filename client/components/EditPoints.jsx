import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDogs, patchPoints } from '../apiClient'

function EditPoints() {
  const navigate = useNavigate()
  const { dog_id } = useParams()
  const [dogPoints, setDogPoints] = useState({
    beg_points: '',
    int_points: '',
    sen_points: '',
    sdv_points: '',
  })

  useEffect(() => {
    getDogs()
      .then((resDogs) => {
        setDogPoints(resDogs.find((dog) => dog.dog_id == +dog_id))
      })
      .catch((err) => console.error(err.message))
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setDogPoints((result) => {
      return { ...result, [name]: value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    return patchPoints(dog_id, dogPoints).then(() => {
      navigate('/mydogs')
    })
  }

  return (
    <div>
      <h1>Edit Dog Points Form for {dogPoints.dog_name}</h1>

      <form>
        <label>Beginner Points: </label>
        <input
          type="text"
          name="dog_points"
          value={dogPoints.beg_points}
          onChange={handleChange}
        />

        <label>Intermediate Points: </label>
        <input
          type="text"
          name="int_points"
          value={dogPoints.int_points}
          onChange={handleChange}
        />

        <label>Senior Points: </label>
        <input
          type="text"
          name="sen_points"
          value={dogPoints.sen_points}
          onChange={handleChange}
        />

        <label>Advanced Points: </label>
        <input
          type="integer"
          name="adv_points"
          value={dogPoints.adv_points}
          onChange={handleChange}
        />
      </form>
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </div>
  )
}

export default EditPoints
