import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}=UserContext((UserContext))

    if(!user) return <div>please login</div>
  return (
    <div>Welcomr {user.username}</div>
  )
}

export default Profile