import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { fetchDogs } from '../actions'

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        className="checkboxes"
      />
      {label}
    </label>
  )
}

function EnterShow() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const displayDogs = useSelector((state) => state.dogDetails)
  const cost = 0
  const [checkedOne, setCheckedOne] = useState(false)
  const [checkedTwo, setCheckedTwo] = useState(false)
  const [checkedThree, setCheckedThree] = useState(false)
  const [checkedFour, setCheckedFour] = useState(false)
  const [checkedFive, setCheckedFive] = useState(false)
  const [checkedSix, setCheckedSix] = useState(false)
  const [checkedSeven, setCheckedSeven] = useState(false)
  const [checkedEight, setCheckedEight] = useState(false)
  const [checkedNine, setCheckedNine] = useState(false)
  const [checkedTen, setCheckedTen] = useState(false)

  const [totalSelectedCheckboxes, setTotalSelectedCheckboxes] = useState(0)
  function handleCheck() {
    setTotalSelectedCheckboxes(
      document.querySelectorAll('input[type=checkbox]:checked').length
    )
  }
  useEffect(() => {
    console.log(totalSelectedCheckboxes)
  }, [totalSelectedCheckboxes])

  useEffect(() => {
    dispatch(fetchDogs())
  }, [])

  function handleChangeOne() {
    setCheckedOne(!checkedOne)
  }
  function handleChangeTwo() {
    setCheckedTwo(!checkedTwo)
  }

  function handleChangeThree() {
    setCheckedThree(!checkedThree)
  }
  function handleChangeFour() {
    setCheckedFour(!checkedFour)
  }
  function handleChangeFive() {
    setCheckedFive(!checkedFive)
  }
  function handleChangeSix() {
    setCheckedSix(!checkedSix)
  }
  function handleChangeSeven() {
    setCheckedSeven(!checkedSeven)
  }
  function handleChangeEight() {
    setCheckedEight(!checkedEight)
  }
  function handleChangeNine() {
    setCheckedNine(!checkedNine)
  }
  function handleChangeTen() {
    setCheckedTen(!checkedTen)
  }

  function handleSubmit(event) {
    event.preventDefault
    navigate('/entries')
  }

  return (
    <div>
      <h1>Enter Show</h1>
      {displayDogs?.map((dog) => {
        return (
          <div key={dog.dog_id}>
            <form className="event-checkboxes">
              <h2>Dogs Name: {dog.dog_name}</h2>

              <Checkbox
                label="Event One"
                checked={checkedOne}
                onChange={handleChangeOne}
              />

              <Checkbox
                label="Event Two"
                checked={checkedOne}
                onChange={handleChangeTwo}
              />

              <Checkbox
                label="Event Three"
                checked={checkedOne}
                onChange={handleChangeThree}
              />

              <Checkbox
                label="Event Four"
                checked={checkedOne}
                onChange={handleChangeFour}
              />

              <Checkbox
                label="Event Five"
                checked={checkedOne}
                onChange={handleChangeFive}
              />

              <Checkbox
                label="Event Six"
                checked={checkedOne}
                onChange={handleChangeSix}
              />

              <Checkbox
                label="Event Seven"
                checked={checkedOne}
                onChange={handleChangeSeven}
              />

              <Checkbox
                label="Event Eight"
                checked={checkedOne}
                onChange={handleChangeEight}
              />

              <Checkbox
                label="Event Nine"
                checked={checkedOne}
                onChange={handleChangeNine}
              />

              <Checkbox
                label="Event Ten"
                checked={checkedOne}
                onChange={handleChangeTen}
              />
            </form>
          </div>
        )
      })}
      <h2>Total cost: </h2>
      <Link to={`/entries`}>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </Link>
    </div>
  )
}

export default EnterShow
