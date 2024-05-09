import React from 'react'
import HomePage from '../Pages/Home/HomePage'
import { Route, Routes } from 'react-router-dom'
import Loader from '../Components/Loader'
import Register from './../Pages/Auth/Register';
import Login from './../Pages/Auth/Login';

function PublicRouter() {
  return (
    <>
    <Routes>
      <Route exact path="/" index element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route exact path="/register" index element={<Register />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default PublicRouter