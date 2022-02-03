import React from 'react'
import './App.css'
import { Tour } from './Tour.js'

export const Tours = ({ tours ,deleteTour}) => {
  return (
    <div className="tours">
      <div className="text-center">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          if (tour.id !== 'recJLWcHScdUtI3ny')          //removing the unwanted dataset
            return <Tour id={tour.id} {...tour} deleteTour={deleteTour}></Tour>
        })}
      </div>
    </div>
  )
}
