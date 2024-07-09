import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import logout from '../../store/authSlice'

function Logout() {
  const dispatch = useDispatch()

  logOutHandler = () => {
    authService.logOut()
    .then(() => {
        dispatch(logout())
    })
  }
  return (
    <button type="submit" onClick={logOutHandler}
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
        Logout
    </button>
  )
}

export default Logout
