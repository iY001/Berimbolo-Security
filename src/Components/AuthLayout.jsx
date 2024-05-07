import React, { useEffect } from 'react'
import { Routes , Route } from 'react-router-dom'
import Login from '../Pages/Auth/Login'
import Register from '../Pages/Auth/Register'

function AuthLayout() {
    useEffect(()=>{
      // if url == login or register set the 
    },[])
  return (
    <>
    <Routes>
      <Route exact path="" index element={<Register />} />
      <Route exact path="/register" index element={<Register />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default AuthLayout