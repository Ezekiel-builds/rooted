import { Routes, Route } from 'react-router'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './pages/HomePage';
import BibleReading from './pages/BibleReading';
import MemoryVerse from './pages/MemoryVerse';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,     // Animation duration in milliseconds (0.8s for smooth, serene entry)
      once: true,        // Ensures animations happen only once while scrolling down
      easing: 'ease-out'
    }, []);
  });
  
  return (
    <>
    <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/bible-reading" element={<BibleReading />} />
       <Route path="/memory-verse" element={<MemoryVerse />} />
       <Route path="/sign-up" element={<SignUp />} />
       <Route path="/sign-in" element={<SignIn/>} />
    </Routes>
    </>
  )
}

export default App
