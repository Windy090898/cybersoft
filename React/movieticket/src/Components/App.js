import React from 'react'
import '../assets/css/style.css'
import Seat from './Seat'
import List from './List'

export default function App() {
  return (
      <div className='container-fluid main'>
          <Seat />
          <List />
    </div>
  )
}
