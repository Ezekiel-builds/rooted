import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './pages/HomePage';
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
      <HomePage />
    </>
  )
}

export default App
