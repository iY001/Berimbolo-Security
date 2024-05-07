import React from 'react'
import HomePage from '../Pages/Home/HomePage'
import { Route, Routes } from 'react-router-dom'

function PublicRouter() {
  return (
    <>
    <Routes>
      <Route exact path="" index element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      
    </Routes>
    </>
  )
}

export default PublicRouter