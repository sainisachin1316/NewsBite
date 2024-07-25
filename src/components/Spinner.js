import React from 'react'
import Load from './loading.gif'
const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={Load} alt="loding" />
    </div>
  )
}

export default Spinner
