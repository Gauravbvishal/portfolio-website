import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id}=useParams()
  return (
    <div>
      <h1 className='text-4xl text-center'>User:{id}</h1>
    </div>
  )
}

export default User
