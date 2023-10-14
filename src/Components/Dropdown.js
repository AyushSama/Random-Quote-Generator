import React, { useState } from 'react'

export default function Dropdown(props) {

    const handleChange = (event)=>{
        props.getType(event.target.value)
    }
    
  return (


    <div>
      <select className="form-select form-select-lg my-3" aria-label=".form-select-lg example" defaultValue={'love'} onChange={handleChange}>
            <option>Any Type? Choose Here &#8826;3</option>
            <option value="famous-quotes">Famous-Quotes</option>
            <option value="life">Life</option>
            <option value="love">Love</option>
            <option value="inspirational">Inspirational</option>
            <option value="business">Business</option>
            <option value="history">History</option>
            <option value="politics">Politics</option>
            <option value="friendship">Friendship</option>
            <option value="wisdom">Wisdom</option>
            <option value="happiness">Happiness</option>
            <option value="proverb">Proverb</option>
            <option value="faith">Faith</option>
            <option value="future">Future</option>
            <option value="nature">Nature</option>
            <option value="religion">Religion</option>
            <option value="technology">Technology</option>
            <option value="success">Success</option>
            <option value="science">Science</option>
            <option value="education">Education</option>


        </select>
    </div>
  )
}
