import React from 'react'
import Welcome from './welcome'

const Greeetings = () => {
  return (
    <div>
    <h1>Greetings component</h1>
    <Welcome firstName = "John" lastName = "Doe" age = "20"/>
    <Welcome firstName = "Tom" lastName = "DoCruie"/>
    </div>
  )
}

export default Greeetings