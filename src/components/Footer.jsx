import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer__logo">
        <h4 className="footer__logo-text">Rooted</h4>
      </div>

      <div className="footer__links">
        <Link to="" className="footer__link">
          PRIVACY
        </Link>
        <Link to="" className="footer__link">
          TERMS
        </Link>
        <Link to="" className="footer__link">
          SUPPORT
        </Link>
      </div>

      <div className="footer__bottom">
        <p className="footer__text">
          &copy; 2026 Rooted Discipleship. Sown in faith.
        </p>
      </div>
    </footer>
  );
}


export default Footer;