import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addDog } from '../actions'

function AddDog() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [dogDetails, setDogDetails] = useState({
    dog_name: '',
    reg_name: '',
    owner_name: '',
    fly_num: '',
    DOB: '',
    height_mm: '',
    height_category: '',
    grade: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setDogDetails((result) => {
      return { ...result, [name]: value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    // dispatch(patchDog(dogDetails))
    navigate('/mydogs')
  }
  return (
    <>
      <div>
        <h1>Add Dog Form</h1>
        <form>
          <label>Dogs Name: </label>
          <input type="text" required name="dog_name" onChange={handleChange} />

          <label>Dogs Registered Name: </label>
          <input type="text" name="reg_name" onChange={handleChange} />

          <label>Owner Name: </label>
          <input
            type="text"
            required
            name="owner_name"
            onChange={handleChange}
          />

          <label>Flygility Number: </label>
          <input type="integer" name="fly_num" onChange={handleChange} />

          <label>DOB: </label>
          <input type="date" name="DOB" value={''} onChange={handleChange} />

          <label>Height in mm: </label>
          <input type="integer" name="height_mm" onChange={handleChange} />

          <label>Height Category: </label>
          <select
            type="text"
            required
            name="height_category"
            onChange={handleChange}
          >
            <option value="micro">micro</option>
            <option value="mini">mini</option>
            <option value="midi">midi</option>
            <option value="maxi">maxi</option>
          </select>

          <label>Grade: </label>
          <select type="text" required name="grade" onChange={handleChange}>
            <option value="Beg-Int">Beg-Int</option>
            <option value="Int-Sen">Int-Sen</option>
            <option value="Sen-Adv">Sen-Adv</option>
          </select>
        </form>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </div>
    </>
  )
}

export default AddDog
