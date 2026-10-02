import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import logoImg from "../assets/logo.png";
import "./Header.css";

function Header() {
  const { user } = useAuth();

async function handleSignOut() {
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    console.error('Error signing out:', error.message);
  } else {
    console.log('User signed out successfully!');
  }
}

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logoImg} alt="Rooted Logo" className="header__logo-img" />

        <h2 className="header__logo-text">Rooted</h2>
      </div>

      <nav className="header__nav">
        <Link to="/" className="header__nav-link">
          Home
        </Link>

        <Link to="/BibleReading" className="header__nav-link">
          Bible Reading
        </Link>

        <Link to="/MemoryVerse" className="header__nav-link">
          Memory Verse
        </Link>

        <Link
          to="/participation"
          onClick={(e) => e.preventDefault()}
          className="header__nav-link"
        >
          Participation
        </Link>
      </nav>

        {user ? (
          <Link to="/dashboard" className="header__sign-up-link" onClick={handleSignOut}>
            Sign Out
          </Link>
        ) : 
        (
          <Link to="/sign-in" className="header__sign-up-link">
            Sign In
          </Link>
        )}
    </header>
  );
}

export default Header;
