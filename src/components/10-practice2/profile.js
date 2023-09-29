import React from 'react'
import Stats from './stats'
import "./profile.scss"

const Profile = (props) => {
  const { name, image, location, shot, folowers, following } = props
  const avatar = require(`../../assets/img/${image}.jpg`)
  const profileImage = { backgroundImage: `url(${avatar})` }

  return (
    <div className='profile-card'>
      <div className='header' style={profileImage}></div>
      <div className='content'>
        <div className='avatar' style={profileImage}></div>
        <h2>{name}</h2>
        <h4>{location}</h4>

        <div className='stats'>
          <Stats name="Shot" value={shot} />
          <Stats name="Folowers" value={folowers} />
          <Stats name="Following" value={following} />
        </div>

      </div>
    </div>
  )
}

export default Profile