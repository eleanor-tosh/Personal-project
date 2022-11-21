// import { getDogs } from '../apiClient'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchDogs } from '../actions'
import { Accordion, Grid } from '@mantine/core'

function MyDogs() {
  const displayDogs = useSelector((state) => state.dogDetails)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDogs())
  }, [])

  return (
    <div>
      <h1>My Dogs</h1>
      <Accordion variant="separated" defaultValue="customization">
        {displayDogs?.map((dog, i) => {
          return (
            <div className="dog-card" key={i}>
              <Accordion.Item value={`doggo-${i}`}>
                <Accordion.Control>
                  <h1>{dog.dog_name}</h1>
                </Accordion.Control>
                <Accordion.Panel>
                  <Grid grow justify="center">
                    <Grid.Col span="auto">
                      <div>
                        <img
                          className="card-image"
                          src={`/images/${dog.image}`}
                          alt="dog"
                        />
                      </div>{' '}
                    </Grid.Col>

                    <Grid.Col span="auto">
                      <h2>Details</h2>
                      <p>Registered Name: {dog.reg_name}</p>
                      <p>Main Handler: {dog.owner_name}</p>
                      <p>Flygility Number: {dog.fly_num}</p>
                      <p>DOB: {dog.DOB}</p>
                      <p>Height: {dog.height_mm}mm</p>
                      <p>Height Category: {dog.height_category}</p>
                      <p>Grade: {dog.grade}</p>
                      <p>Active Status: {dog.active}</p>
                      <Link to={`/dog/${dog.dog_id}/details`}>
                        <button>Edit Details</button>
                      </Link>
                    </Grid.Col>
                    <Grid.Col span="auto">
                      <h2>Points</h2>
                      <p>Beginner: {dog.beg_points}</p>
                      <p>Intermediate: {dog.int_points}</p>
                      <p>Senior: {dog.sen_points}</p>
                      <p>Advanced: {dog.adv_points}</p>

                      <Link to={`/dog/${dog.dog_id}/points`}>
                        <button>Edit Points</button>
                      </Link>
                    </Grid.Col>
                  </Grid>
                </Accordion.Panel>
              </Accordion.Item>
            </div>
          )
        })}
      </Accordion>

      <Link to={`/dog/add`}>
        <button className="wide-button">Add Dog</button>
      </Link>
    </div>
  )
}

export default MyDogs
