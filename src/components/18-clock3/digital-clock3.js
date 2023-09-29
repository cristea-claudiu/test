import React, { useEffect, useState } from 'react'
import './digital-clock3.scss'
import moment from 'moment/moment';

const DigitalClock3 = (props) => {

    const dateTIme= moment();

    const [dateTime, setDateTime] = useState(moment())
    
    const hours = dateTIme.format(`HH`)
    const dateStr = dateTIme.format("LL");
    const dayStr = dateTIme.format("dddd");
    const hour = dateTIme.hour();

    const minute= dateTIme.format(`mm`)
    const seconds= dateTIme.format(`ss`)

    let message = "";
    if(hour >=6 && hour <11){
        message="Morning";
    }else if(hour>=11 && hour<14){
        message = "Noon";
    }else if(hour>=14 && hour<17){
        message = "Afternoon";
    }else if(hour>=17 && hour<22){
        message = "Evening";
    }else{
        message="Night"
    }
    
    const {bgColor, textColor}=props;
    const clockStyle={
        color:textColor,
        backgroundColor:bgColor,
    }

     
    useEffect(() => {
        const timer= setInterval(() => {
            setDateTime(moment())
        }, 1000);
    
      return () => {
        clearInterval(timer);
      }
    }, [])
    console.log(seconds);

    
  return (
    
    <div>
    <h4>Digital Clock</h4>
    <div  className='digital-clock' style={clockStyle}>
        <div className='time'>{hours}<span style={{opacity:seconds%2===0 ? 1 : 0}}>:</span>{minute}</div>
        <div>
        <div className='date'>{dateStr}</div>
        <div className='day'>{dayStr} {message}</div>
        </div>
        </div>
    </div>
  )
}

export default DigitalClock3