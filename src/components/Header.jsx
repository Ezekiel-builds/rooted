import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import logoImg from "../assets/logo.png";
import "./Header.css";

function Header() {
  const { user } = useAuth();

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

  {/*     {user ? (
        <button
          type="button"
           onClick={handleSignOut} 
          className="header__sign-up-link"
        >
          Sign Out
        </button>
      ) : (
        <Link to="/sign-up" className="header__sign-up-link">
          Sign Up
        </Link>
      )} */}

        <Link to="/sign-up" className="header__sign-up-link">
          Sign Up
        </Link>
    </header>
  );
}

export default Header;
