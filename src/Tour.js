import React, { useState } from 'react';

// This is being destructured with the spread operator from the Tours.js parent file.
const Tour = ({id, image, info, price, name, removeTour}) => {
  // readMore is a boolean state that shows/hides more or less of the paragraph text.
  const [readMore, setReadMore] = useState(false)

  return (
    <article className="single-tour">
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        {/* the .substring() method allows us to cut off the text at specified character positions. In this case, starting at 0 and ending at 200. */}
        {/* If readMore is true, show all of the info. Else, show only 200 characters. */}
        <p>{readMore ? info : `${info.substring(0,200)}...`}
          {/* Sets the readMore state boolean to the opposite boolean on click*/}
          <button onClick={()=> setReadMore(!readMore)}>
            {/* Changes the text of the button based on the readMore state boolean */}
            {readMore ? `Show less` : `Read more`}
          </button>
        </p>
        {/* Remove button that calls a function from the removeTour prop*/}
        {/* The ID of the tour is passed to the function */}
        <button className="delete-btn" onClick={()=>removeTour(id)}>Not Interested</button>
      </footer>
    </article>
  )
};

export default Tour;
