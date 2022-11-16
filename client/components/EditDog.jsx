import React, { useState } from 'react'

function EditDog() {
  const [dogDetails, setDogDetails] = useState([
    {
      dog_name: '',
      reg_name: '',
      owner_name: '',
      fly_num: '',
      DOB: '',
      height_mm: '',
      height_category: '',
      grade: '',
    },
  ])

  const handleChange = (event) => {
    const { name, value } = event.target
    setDogDetails((result) => {
      return { ...result, [name]: value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    console.log(dogDetails)
    // navigate('/home')
  }

  return (
    <div>
      <h1>Edit Dog Details Form</h1>
      <form>
        <label>Dogs Name: </label>
        <input
          type="text"
          required
          name="dog_name"
          value={dog.dog_name}
          onChange={handleChange}
        />

        <label>Dogs Registered Name: </label>
        <input
          type="text"
          name="reg_name"
          value={dog.reg_name}
          onChange={handleChange}
        />

        <label>Owner Name: </label>
        <input
          type="text"
          required
          name="owner_name"
          value={dog.owner_name}
          onChange={handleChange}
        />

        <label>Flygility Number: </label>
        <input
          type="integer"
          name="fly_num"
          value={dog.fly_num}
          onChange={handleChange}
        />

        <label>DOB: </label>
        <input type="date" name="DOB" value={dog.DOB} onChange={handleChange} />

        <label>Height in mm: </label>
        <input
          type="integer"
          name="height_mm"
          value={dog.height_mm}
          onChange={handleChange}
        />

        <label>Height Category: </label>
        <select
          type="text"
          required
          name="height_category"
          value={dog.height_category}
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
          value={dog.grade}
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
