import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

export const Tour = ({ id, image, info, price, name, deleteTour }) => {
  const [readMore, setReadmore] = useState(false)

  const handle = () => {
    setReadmore(!readMore)
  }
  const handleDel = () => {}
  return (
    <article>
      <div className="single-tour">
        <img src={image} alt={name} />
        <div className="tour-info">
          <h3>{name}</h3>
          <p className="price">₹{price}</p>
          <p className="lead">
            {readMore ? info : `${info.substring(0, 200)}......`}
            <button className="btn-read" onClick={handle}>
              {readMore ? 'Show Less' : 'Read More'}
            </button>
          </p>

          <button
            type="button"
            className="btn"
            onClick={() => {
              deleteTour(id)
            }}
          >
            Not Intrested
          </button>
        </div>
      </div>
    </article>
  )
}
