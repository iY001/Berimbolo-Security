import React from 'react'
import HomePage from '../Pages/Home/HomePage'
import { Route, Routes } from 'react-router-dom'
import Loader from '../Components/Loader'

function PublicRouter() {
  // // make a loader that will be shown onload 
  // const [isLoading, setIsLoading] =useState(true)

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 1000);
      
  //   return () => {
  //    window.addEventListener('load' , ()=> setIsLoading(true))
  //   }
  // }, [])
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