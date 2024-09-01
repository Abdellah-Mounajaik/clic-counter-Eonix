import React from 'react';
import './Home.css'

function Home({
  onIncrement,
  onDecrement,
  counter,
})
 
{
  return (
    <div>
      <button className='vert' onClick={onIncrement}>+</button>
      <p>{counter}</p>
      <button className='rouge' onClick={onDecrement}>-</button>
    </div>
  );
};

export default Home;
