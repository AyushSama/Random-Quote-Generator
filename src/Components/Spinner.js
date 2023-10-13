import React from 'react'
import spinner from './spinner.gif'

export default function Spinner() {
  
  return (
    <div className='container text-center'>
    <img src={spinner} alt={spinner} />
    </div>
  )
}
