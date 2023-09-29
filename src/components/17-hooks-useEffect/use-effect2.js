import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const UseEffect2 = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
      document.title=`Hello ${counter}`
    }, [counter])
    

  return (
    <Container>
        <h1>you have clicked {counter} times</h1>
        <button onClick={()=>setCounter(i=>i+1)}>Click me</button>

    </Container>
  )
}

export default UseEffect2