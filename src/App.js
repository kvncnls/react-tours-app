import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project';

console.clear();

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    // Places all 'tour.id' items that DON'T match the id passed into the function into a new array called newTours
    const newTours = tours.filter((tour) => tour.id !== id)
    // sets the newTours as our tours state
    setTours(newTours)
  }

  const fetchTours = async() => {
    setLoading(true);

    // try/catch statement for fetching data
    try {
      const response = await fetch(url);
      // tours is our new variable that contains the url data
      const tours = await response.json();
      // Here we are placing the tours data into the setTours state function.
      setTours(tours);
      // We set loading to false because we've attempted to retrieve our data
      setLoading(false);
    } catch (error) {
      // We set loading to false because we've attempted to retrieve our data
      setLoading(false);
    }
  }

  // fetch the data on initial render
  useEffect(()=>{
    fetchTours();
  },[])

  // Conditional rendering of the loading sequence
  if (loading) {
    return <main>
      <Loading/>
    </main>
  }

  // Conditional rendering of message when there are no tours left
  if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>No tours left</h2>
        {/* Button refreshes our tours state, regenerating all items in the array */}
        <button className="btn" onClick={fetchTours}>Refresh</button>
      </div>
    </main>
  }

  return <main>
    {/* Here we are passing the tours state value as a prop called tours in the Tours component. Man, these names are confusing! */}
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
}

export default App
