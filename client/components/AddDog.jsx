import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { submitDog } from '../actions'

function AddDog() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [newDog, setNewDog] = useState({
    dog_name: '',
    reg_name: '',
    owner_name: 'Eleanor Tosh',
    fly_num: '',
    DOB: '',
    height_mm: '',
    height_category: '',
    grade: 'Beg-Int',
    active: 'Training',
    image: 'cartooncollie.jpg',
    beg_points: '0',
    int_points: '0',
    sen_points: '0',
    adv_points: '0',
  })

  const [errors, setErrors] = useState({})

  const flygilityNumberRegEx = /^$|^\d{2}\/\d{3}\/\d{2}$|^\d{2}\/\d{3}\/\d{1}$/

  function handleChange(event) {
    const { name, value } = event.target
    setNewDog((result) => {
      return { ...result, [name]: value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newErrors = {}

    if (!String(newDog.fly_num).match(flygilityNumberRegEx)) {
      newErrors.fly_num =
        'Flygility number must be left blank if unknown or in the format 00/000/0 or 00/000/00'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      dispatch(submitDog(newDog))
      setNewDog('')
      navigate('/mydogs')
    }
  }
  return (
    <>
      <div>
        <h1>Add Dog Form</h1>
        <form>
          <label>
            Dog Name:
            <input
              type="text"
              required
              name="dog_name"
              placeholder="Dog Name"
              maxLength={50}
              onChange={handleChange}
            />
          </label>

          <label>
            Registered Name:
            <input
              type="text"
              name="reg_name"
              maxLength={50}
              placeholder="NZKC name or the same as above"
              onChange={handleChange}
            />
          </label>

          {/* <label>Owner Name: </label>
          <input
            type="text"
            required
            name="owner_name"
            maxLength={50}
            onChange={handleChange}
          /> */}
          <div>
            <label>
              Flygility Number:
              <input
                type="integer"
                name="fly_num"
                placeholder="00/000/0"
                onChange={handleChange}
              />
            </label>{' '}
            <p style={{ color: 'red' }}>
              {errors.fly_num && <div>{errors.fly_num}</div>}
            </p>
          </div>

          <label>
            DOB:
            <input type="date" name="DOB" onChange={handleChange} />
          </label>

          <label>
            Height in mm:
            <input
              type="number"
              name="height_mm"
              min="100"
              max="900"
              placeholder="500"
              onChange={handleChange}
            />
          </label>

          <label>
            Height Category:
            <select
              type="text"
              required
              name="height_category"
              onChange={handleChange}
            >
              <option value="Micro">Micro</option>
              <option value="Mini">Mini</option>
              <option value="Midi">Midi</option>
              <option value="Maxi">Maxi</option>
            </select>
          </label>

          <label>
            Grade:
            <select type="text" required name="grade" onChange={handleChange}>
              <option value="Beg-Int">Beg-Int</option>
              <option value="Int-Sen">Int-Sen</option>
              <option value="Sen-Adv">Sen-Adv</option>
            </select>
          </label>

          <label>
            Active Status:
            <select type="text" required name="active" onChange={handleChange}>
              <option value="Training">Training</option>
              <option value="Competing">Competing</option>
              <option value="Retired">Retired</option>
            </select>
          </label>

          <label>
            Image:
            <input
              type="text"
              name="image"
              maxLength={100}
              placeholder="Leave blank for default image"
              onChange={handleChange}
            />
          </label>
        </form>

        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </div>
    </>
  )
}

export default AddDog
