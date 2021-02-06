import React from 'react'

function Radios(props) {
  return (
    <div>
      <h3 className='center'> Choose data size </h3>
      <div className='center' id='radioContainer'>

        <span className='radio'>
          <input type='radio' value='10' name='quantity' id='10' onChange={props.num}/>
          <label htmlFor='10'> 10 </label>
        </span>  
        
        <span className='radio'>
          <input type='radio' value='50' name='quantity' id='50' onChange={props.num}/>
          <label htmlFor='50'> 50 </label>
        </span> 

        <span className='radio'>
          <input type='radio' value='200' name='quantity' id='200' onChange={props.num}/>
          <label htmlFor='200'> 200 </label>
        </span> 

        <span className='radio'>
          <input type='radio' value='500' name='quantity' id='500' onChange={props.num}/>
          <label htmlFor='500'> 500 </label>
        </span> 

      </div>
    </div>
  )
}

export default Radios
