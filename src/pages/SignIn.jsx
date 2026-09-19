import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logoImg from '../assets/logo.png';
import google from '../assets/Google.png';
import '../pages/SignUp.css';
function SignIn() {
     return (
        <>

            <Header />

            <div className="form__container">
                <div className="form__heading">
                    <div className="logo">
                        <img src={logoImg} alt="Logo image" />
                    </div>
                    
                    <h3 className="form__header">
                        Welcome Back
                    </h3>

                    <p className="form__description">
                       Continue your quiet walk of devotion, thoughtful reflection, 
                       and church life together.
                    </p>
                </div>

                <form className="signUp__form">
                    <div className="form__meta">
                        <label htmlFor="Email" className="form__label">Email Address</label>
                        <input type="text" placeholder="Jane.doe@example.gmail.com" className="form__input" />
                    </div>

                    <div className="form__meta">
                        <label htmlFor="Password" className="form__label">Password</label>
                        <input type="password" placeholder="••••••••" className="form__input" />
                    </div>

                <div className="form__bottom">
                    <button type="submit" className="form__submit-button">
                        Continue Growing
                    </button>

                    <div className="form__alternate">
                        <div className="line"></div>
                        <p className="alternate__text">OR</p>
                         <div className="line"></div>
                    </div>

                    <button type="button" className="signUp__button">
                        <img src={google} alt="Google" width={40}/> 
                        Continue with Google
                    </button>

                    <p className="form__bottom-text">
                        Don't have an account? <Link to="/sign-up">Sign Up</Link>
                    </p>
                </div>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default SignIn;