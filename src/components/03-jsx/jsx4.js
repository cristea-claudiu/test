import React from 'react'

const Jsx4 = () => {

    const age = 10;
  return (
    <div>
        {
            age >= 18 ? <h1>Age is greater than 18</h1> : <h1>Age is less than 18</h1>
        }
        {
            age >=18 && <h3>Eligible for a license</h3>
        }
        {
            age >=18 || <h3>Not ligible for a license</h3>
        }

    </div>
  )
}

export default Jsx4