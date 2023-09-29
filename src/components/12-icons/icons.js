import React from 'react'
import {FcHome,FcRating} from "react-icons/fc"
import {FaAmazon} from "react-icons/fa6";
const Icons = () => {
  return (
    <div>
    <FcHome style={{fontSize:"3rem"}}/> <br />
    <FcRating style={{fontSize:"3rem"}}/><FcRating style={{fontSize:"3rem"}}/><FcRating style={{fontSize:"3rem"}}/><FcRating style={{fontSize:"1.5rem"}}/><FcRating style={{fontSize:"1.5rem"}}/>
    <br />
    <FaAmazon style={{fontSize:"8rem"}}/>
    </div>
  )
}

export default Icons