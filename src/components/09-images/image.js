import React from 'react'
import image2 from "../../assets/img/image2.jpg"

const Image = () => {
  return (
    <div>
    {/* img urls */}
    <img src="https://images.unsplash.com/photo-1614174124242-4b3656523295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" width={"573px"} />
    {/* static method ,if wee have the image in a folder */}
    <img src="assets/img/image1.jpg" alt="" width={"600px"} />
     {/*  import and require images should be inside src folder
          when to use ?
            --if images are from backend side or external files
            like json use require
            --if images are in src folder we can use import
      */}
    {/* imported prevent caching*/}
    <img src={image2} alt=""/>
    {/* inline import  prevent caching*/}
    <img src={require("../../assets/img/image3.jpg")} alt="" />
    </div>
  )
}

export default Image