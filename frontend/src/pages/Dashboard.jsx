import React from 'react'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import Spinner from '../components/Spinner'
import {getGoals, reset} from '../features/goals/goalSlice'
import MessageForm from '../components/Forum/MessageForm'
import Map from '../components/Mapcom/Map'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {goals, isLoading, isError, message} = useSelector((state) => state.goals)
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    if(isError) {
      console.log(message)
    }



    if(!user) {
      navigate('login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <Spinner />
  }
  
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
      </section>
      <section className="heading">
      <Map />
      <br />
      <br />
      <GoalForm />
      </section>


      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (<h3>You have not set any Trips</h3>)}
      </section>
      {/* Message board shown below to be added at a later date */}
      {/* < MessageForm /> */}
    </>
  )
}

export default Dashboard
