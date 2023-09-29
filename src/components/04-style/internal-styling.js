import React from 'react'

const InternalStyling = () => {

    const h1style={
        color: "gray",
        background: "yellow",
        fontSize: "50px",
        textAlign: "center",
        border: "3px solid black",
        borderRadius: "25px",
      };
      const ptagstyle={
        color:"blue",
        textAlign: "justify",
        fontSize:"30px",
        border:"2px solid black",
        borderRadius:"15px"
      }


    return (
        <div>
          <h1
            style={h1style}
          >
            Style 2 internal
          </h1>
          <p style={ptagstyle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quo
            tempore necessitatibus maiores, iure numquam temporibus deserunt
            aliquam ea odit debitis facilis provident nam veniam totam ipsa
            consectetur vel adipisci, alias optio blanditiis corporis.
            Perferendis, vero modi? Error, saepe ratione dolor tempore sunt et,
            asperiores a nesciunt commodi accusantium ipsam magni fugit
            repellat! Ipsam aliquid, voluptatum, in repudiandae iure aspernatur
            a animi itaque molestias maiores numquam obcaecati nihil harum quam
            doloribus veritatis tenetur eveniet odit 
          </p>
          <p style={{...ptagstyle, color:"red" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quo
            tempore necessitatibus maiores, iure numquam temporibus deserunt
            aliquam ea odit debitis facilis provident nam veniam totam ipsa
            consectetur vel adipisci, alias optio blanditiis corporis.
            Perferendis, vero modi? Error, saepe ratione dolor tempore sunt et,
            asperiores a nesciunt commodi accusantium ipsam magni fugit
            repellat! Ipsam aliquid, voluptatum, in repudiandae iure aspernatur
            a animi itaque molestias maiores numquam obcaecati nihil harum quam
            doloribus veritatis tenetur eveniet odit 
          </p>
        </div>
  )
}

export default InternalStyling