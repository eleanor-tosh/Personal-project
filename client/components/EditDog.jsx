import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateDogDetails } from '../actions'

function EditDog() {
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
        <form>
          <h1>Edit Dog Details Form for {dogDetails.dog_name}</h1>

          <label>Dogs Name: </label>
          <input
            type="text"
            required
            name="dog_name"
            value={dogDetails.dog_name}
            onChange={handleChange}
          />

          <label>Dogs Registered Name: </label>
          <input
            type="text"
            name="reg_name"
            value={dogDetails.reg_name}
            onChange={handleChange}
          />

          <label>Owner Name: </label>
          <input
            type="text"
            required
            name="owner_name"
            value={dogDetails.owner_name}
            onChange={handleChange}
          />

          <label>Flygility Number: </label>
          <input
            type="integer"
            name="fly_num"
            value={dogDetails.fly_num}
            onChange={handleChange}
          />

          <label>Height in mm: </label>
          <input
            type="integer"
            name="height_mm"
            value={dogDetails.height_mm}
            onChange={handleChange}
          />

          <label>Height Category: </label>
          <select
            type="text"
            required
            name="height_category"
            value={dogDetails.height_category}
            onChange={handleChange}
          >
            <option value="Micro">Micro</option>
            <option value="Mini">Mini</option>
            <option value="Midi">Midi</option>
            <option value="Maxi">Maxi</option>
          </select>

          <label>Grade: </label>
          <select
            type="text"
            required
            name="grade"
            value={dogDetails.grade}
            onChange={handleChange}
          >
            <option value="Beg-Int">Beg-Int</option>
            <option value="Int-Sen">Int-Sen</option>
            <option value="Sen-Adv">Sen-Adv</option>
          </select>

          <label>Active Status: </label>
          <select
            type="text"
            required
            name="active"
            value={dogDetails.active}
            onChange={handleChange}
          >
            <option value="Training">Training</option>
            <option value="Competing">Competing</option>
            <option value="Retired">Retired</option>
          </select>
        </form>

        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </div>
    )
  }
}

export default EditDog
