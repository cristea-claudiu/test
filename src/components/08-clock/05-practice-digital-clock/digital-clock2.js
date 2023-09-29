import React from 'react'
import './digital-clock2.scss'
import moment from 'moment/moment';

const DigitalClock2 = (props) => {
    const timeStr = moment().format("HH:mm ")
    const dateStr = moment().format("LL");
    const dayStr = moment().format("dddd");
    const hour = moment().hour();
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
  return (
    
    <div>
    <h4>Digital Clock</h4>
    <div  className='digital-clock' style={clockStyle}>
        <div className='time'>{timeStr}</div>
        <div>
        <div className='date'>{dateStr}</div>
        <div className='day'>{dayStr} {message}</div>
        </div>
        </div>
    </div>
  )
}

export default DigitalClock2