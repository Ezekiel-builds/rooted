import Footer from "../components/Footer";
import Header from "../components/Header";
import google from '../assets/Google.png';
import logoImg from '../assets/logo.png';
import './SignUp.css';

function SignUp() {
    return (
        <>

            <Header />

            <div className="form__container">
                <div className="form__heading">
                    <div className="logo">
                        <img src={logoImg} alt="Logo image" />
                    </div>
                    
                    <h3 className="form__header">
                        Begin Journey
                    </h3>

                    <p className="form__description">
                        Create your account to start cultivating daily
                        rhythms of Word, prayer, and life together.
                    </p>
                </div>

                <form className="signUp__form">
                    <div className="form__meta">
                        <label htmlFor="Full name" className="form__label">Full Name</label>
                        <input type="text" placeholder="Jane Doe" className="form__input" />
                    </div>

                    <div className="form__meta">
                        <label htmlFor="Church name" className="form__label">Church Name<span>(Optional)</span></label>
                        <input type="text" placeholder="Grace Community Church" className="form__input" />
                    </div>

                    <div className="form__meta">
                        <label htmlFor="Full name" className="form__label">Email Address</label>
                        <input type="email" placeholder="Jane@example.com" className="form__input" />
                    </div>

                    <div className="form__meta">
                        <label htmlFor="Full name" className="form__label">Password</label>
                        <input type="password" placeholder="••••••••" className="form__input" />
                    </div>

                <div className="form__bottom">
                    <button type="submit" className="form__submit-button">
                        Start Growing
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
                        Already have an account? <a href="#">Sign In</a>
                    </p>
                </div>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default SignUp;