import React from 'react';
const loadingGif = 'https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'

const Loading = () => {
  console.log()
  return (
    <div className="loading">
      <h1>loading...</h1>
      <img src={loadingGif} alt="loading spinner"></img>
    </div>
  );
};

export default Loading;