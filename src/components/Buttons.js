import React from 'react'

function Reset(props) {
  return (
  <div className='center'>
    <span className='center'>
      <p> Choose a data size and press <strong> reset </strong> to update or to randomize the current set of data </p>
      <button className='rando' onClick={props.reset}> Reset! </button>
    </span>

    <span className='center'>
    <button className='sort' onClick={props.bubble}> Sort! </button>

    {/* <button className='disabled'> Merge Sort coming soon! </button>
    <button className='disabled'> Quick sort coming soon! </button> */}
    </span>
  </div>  
  )
}

export default Reset
