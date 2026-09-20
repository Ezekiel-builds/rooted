import { Routes, Route } from 'react-router'
import { useEffect } from 'react';
import { useAuth } from './components/AuthContext.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './pages/HomePage';
import BibleReading from './pages/BibleReading';
import MemoryVerse from './pages/MemoryVerse';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import './App.css'

function App() {
  const { user } = useAuth();
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
       <Route path="/bible-reading" element={user ? <BibleReading /> : <HomePage />} />
       <Route path="/memory-verse" element={user ? <MemoryVerse /> : <HomePage />} />
       <Route path="/sign-up" element={user ? <Dashboard /> : <SignUp />} />
       <Route path="/sign-in" element={user ? <Dashboard/> : <SignIn />} />
       <Route path="/dashboard" element={user ? <Dashboard /> : <HomePage />} />
    </Routes>
    </>
  )
}

export default App
