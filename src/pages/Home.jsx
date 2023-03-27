import React from 'react'
import {useUserAuthContext} from '../context/UserAuthContet'
const Home = () => {
  const {user, logOut} = useUserAuthContext()

  const handleLogOut = async()=>{
    try{
      await logOut()
    }catch(err){

    }
  }
  return (
    <div>
      <p>Welcome {user && user.email}. </p>
      <button onClick={handleLogOut} className='btn btn-primary'>LogOut</button>
    </div>
  )
}

export default Home