import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDogs, patchDog } from '../apiClient'

function EditDog(props) {
  const navigate = useNavigate()
  const { dog_id } = useParams()
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

  useEffect(() => {
    getDogs()
      .then((resDogs) => {
        setDogDetails(resDogs.find((dog) => dog.dog_id == +dog_id))
      })
      .catch((err) => console.error(err.message))
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setDogDetails((result) => {
      return { ...result, [name]: value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (props.variant === 'details') {
      return patchDog(dog_id, dogDetails).then(() => {
        navigate('/mydogs')
      })
    }
  }

  return (
    <div>
      <form>
        {props.variant === 'details' ? (
          <h1>Edit Dog Details Form for {dogDetails.dog_name}</h1>
        ) : (
          <h1>New Dog Details Form</h1>
        )}
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
        {/* 
        <label>DOB: </label>
        <input
          type="date"
          name="DOB"
          value={dogDetails.DOB}
          onChange={handleChange}
        /> */}

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
          <option value="micro">micro</option>
          <option value="mini">mini</option>
          <option value="midi">midi</option>
          <option value="maxi">maxi</option>
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
      </form>
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </div>
  )
}

export default EditDog
