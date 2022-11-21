import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateDogDetails } from '../actions'

function EditPoints() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { dog_id } = useParams()
  const displayDog = useSelector((state) => state.dogDetails)

  const [dogDetails, setDogDetails] = useState(null)

  useEffect(() => {
    const selectedDog = displayDog.find((dog) => dog_id == dog.dog_id)
    setDogDetails(selectedDog)
  }, [])

  function handleChange(event) {
    console.log(event.target.value)
    const { name, value } = event.target
    setDogDetails({ ...dogDetails, [name]: value })
  }
  console.log(dogDetails)
  function handleSubmit(event) {
    event.preventDefault()
    dispatch(updateDogDetails(dogDetails))
    navigate('/mydogs')
  }
  if (!dogDetails) {
    return <div></div>
  } else {
    return (
      <div>
        <h1>Edit Dog Points Form for {dogDetails.dog_name}</h1>

        <form>
          <label>Beginner Points: </label>
          <input
            type="text"
            name="beg_points"
            value={dogDetails.beg_points}
            onChange={handleChange}
          />

          <label>Intermediate Points: </label>
          <input
            type="text"
            name="int_points"
            value={dogDetails.int_points}
            onChange={handleChange}
          />

          <label>Senior Points: </label>
          <input
            type="text"
            name="sen_points"
            value={dogDetails.sen_points}
            onChange={handleChange}
          />

          <label>Advanced Points: </label>
          <input
            type="integer"
            name="adv_points"
            value={dogDetails.adv_points}
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
