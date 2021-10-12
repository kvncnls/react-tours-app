import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return <section>
    <div className="title">
      <h2>Our Tours</h2>
      <div className="underline"></div>
    </div>
    <div>
      {/* map() allows us to invoke a function over each item in the array. */}
      {tours.map((tour)=>{
        // The spread operator gives the Tour component access to all of the properties of each tour object.
        return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
      })}
    </div>
  </section>;
};

export default Tours;