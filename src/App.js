import { useState, useEffect } from 'react'
import { Tours } from './Tours'
import './App.css'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const deleteTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id)
    setTours(newTour)
  }

  const fetchTours = async () => {
    const res = await fetch(url)
    const data = await res.json()

    setTours(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    )
  }
  if (tours.length === 1) {
    return (
      <div className='loading'>
        <h2>No Tours Left</h2>
      </div>
    )
  }
  return (
    <>
      <Tours tours={tours} deleteTour={deleteTour} />
      {console.log(tours.length)}
    </>
  )
}


export default App
