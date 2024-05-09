import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ScrollToTopOnPageChange from "./Components/ScrollToTop";
import PublicRouter from "./Routes/PublicRouter";
import Aos from "aos";
import 'aos/dist/aos.css'; 
import AuthLayout from "./Components/AuthLayout";
import Loader from "./Components/Loader";

function App() {
  const [isLoading, setIsLoading] =useState(true)
  useEffect(() => {
    Aos.init({duration: 1000});
    

    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])
  const isAuthenticated = localStorage.getItem('isAuthenticated') || true

  return (
    <>
    <ScrollToTopOnPageChange />
    {
      isLoading && <Loader/>
    }
    {
      isAuthenticated === 'false' || !isAuthenticated &&
    <AuthLayout/>
    }
    {
      isAuthenticated === 'true' &&
      <>
    <Navbar/>
    <PublicRouter/>
    <Footer/>
    </>
    }
    </>
  );
}

export default App;
