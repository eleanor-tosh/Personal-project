// import { getDogs } from '../apiClient'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchDogs } from '../actions'
import { Accordion } from '@mantine/core'

function MyDogs() {
  const displayDogs = useSelector((state) => state.dogDetails)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDogs())
  }, [])

  return (
    <div>
      <h1>My Dogs</h1>

      {displayDogs?.map((dog) => {
        return (
          <div className="dog-card" key={dog.dog_id}>
            <Accordion variant="separated" defaultValue="customization">
              <Accordion.Item value="customization">
                <Accordion.Control>
                  <h2>{dog.dog_name}</h2>
                </Accordion.Control>
                <Accordion.Panel>
                  <img className="card-image" src={`/images/${dog.image}`} />

                  <p>Registered Name: {dog.reg_name}</p>
                  <p>Main Handler: {dog.owner_name}</p>
                  <p>Flygility Number: {dog.fly_num}</p>
                  <p>DOB: {dog.DOB}</p>
                  <p>Height: {dog.height_mm}mm</p>
                  <p>Height Category: {dog.height_category}</p>
                  <p>Grade: {dog.grade}</p>
                  <p>Active Status: {dog.active}</p>

                  <h2>Points</h2>
                  <p>Beginner: {dog.beg_points}</p>
                  <p>Intermediate: {dog.int_points}</p>
                  <p>Senior: {dog.sen_points}</p>
                  <p>Advanced: {dog.adv_points}</p>

                  <Link to={`/dog/${dog.dog_id}/details`}>
                    <button>Edit Details</button>
                  </Link>

                  <Link to={`/dog/${dog.dog_id}/points`}>
                    <button>Edit Points</button>{' '}
                  </Link>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        )
      })}
      <Link to={`/dog/add`}>
        <button className="wide-button">Add Dog</button>
      </Link>
    </div>
  )
}

export default MyDogs
