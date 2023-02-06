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

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState()

  const numberValidationRegEx =
    /^(0(\.\d{0,1}[05])?|[1-9]\d{0,2}(\.\d{0,1}[05])?)$/

  useEffect(() => {
    const selectedDog = displayDog.find((dog) => dog_id == dog.dog_id)
    setDogDetails(selectedDog)
  }, [])

  function handleChange(event) {
    console.log(event.target.value)
    const { name, value } = event.target
    setDogDetails({ ...dogDetails, [name]: value })
  }
  // console.log(dogDetails)
  function handleSubmit(event) {
    event.preventDefault()

    const newErrors = {}

    if (!String(dogDetails.beg_points).match(numberValidationRegEx)) {
      newErrors.beg_points =
        'Beginner points must be a number between 0 and 999, and must be a whole or half number'
    }

    if (!String(dogDetails.int_points).match(numberValidationRegEx)) {
      newErrors.int_points =
        'Intermediate must be a number between 0 and 999, and must be a whole or half number'
    }

    if (!String(dogDetails.sen_points).match(numberValidationRegEx)) {
      newErrors.sen_points =
        'Senior must be a number between 0 and 999, and must be a whole or half number'
    }

    if (!String(dogDetails.adv_points).match(numberValidationRegEx)) {
      newErrors.adv_points =
        'Advanced must be a number between 0 and 999, and must be a whole or half number'
    }
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      dispatch(updateDogDetails(dogDetails))
      setSuccess(true)
      navigate('/mydogs')
    }
  }
  if (!dogDetails) {
    return <div></div>
  } else {
    return (
      <div>
        <h1>Edit Dog Points Form for {dogDetails.dog_name}</h1>

        <form>
          <div>
            <label>Beginner Points: </label>
            <input
              type="number"
              name="beg_points"
              min="0"
              max="999"
              step="0.5"
              value={dogDetails.beg_points}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Intermediate Points: </label>
            <input
              type="number"
              name="int_points"
              min="0"
              max="999"
              step="0.5"
              value={dogDetails.int_points}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Senior Points: </label>
            <input
              type="number"
              name="sen_points"
              min="0"
              max="999"
              step="0.5"
              value={dogDetails.sen_points}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Advanced Points: </label>
            <input
              type="number"
              name="adv_points"
              min="0"
              max="999"
              step="0.5"
              value={dogDetails.adv_points}
              onChange={handleChange}
            />
          </div>
        </form>

        {Object.keys(errors).map((field) => (
          <p key={field} style={{ color: 'red' }}>
            {errors[field]}
          </p>
        ))}

        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </div>
    )
  }
}

export default EditPoints
