import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs, patchPoints } from '../apiClient'

function EditPoints() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { dog_id } = useParams()
  const displayDog = useSelector(
    (state) =>
      state.dogDetails && state.dogDetails.find((dog) => dog_id == dog.dog_id)
  )

  const [dogPoints, setDogPoints] = useState(displayDog)

  function handleChange(event) {
    console.log(event.target.value)
    const { name, value } = event.target
    setDogPoints({ ...dogPoints, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    navigate('/mydogs')
  }
  if (!dogPoints) {
    return <div></div>
  } else {
    return (
      <div>
        <h1>Edit Dog Points Form for {dogPoints.dog_name}</h1>

        <form>
          <label>Beginner Points: </label>
          <input
            type="text"
            name="beg_points"
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
}

export default EditPoints
