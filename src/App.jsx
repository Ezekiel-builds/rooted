import { Routes, Route } from 'react-router'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './pages/HomePage';
import BibleReading from './pages/BibleReading';
import MemoryVerse from './pages/MemoryVerse';
import SignUp from './pages/SignUp';
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
       <Route path="/BibleReading" element={<BibleReading />} />
       <Route path="/MemoryVerse" element={<MemoryVerse />} />
       <Route path="/SignUp" element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App
