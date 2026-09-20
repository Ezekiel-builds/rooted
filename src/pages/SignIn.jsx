import { supabase } from '../supabaseClient';
import { useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logoImg from '../assets/logo.png';
import google from '../assets/Google.png';
import '../pages/SignUp.css';
function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignIn(e) {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            console.log(error.message);
            return;;
        }

        console.log(`Logged in successfully: ${data.user.email}`);
    }

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

                <form className="signUp__form" onSubmit={handleSignIn}>
                    <div className="form__meta">
                        <label htmlFor="Email" className="form__label">Email Address</label>
                        <input 
                        type="email" 
                        placeholder="Jane.doe@example.gmail.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form__input" />
                    </div>

                    <div className="form__meta">
                        <label htmlFor="Password" className="form__label">Password</label>
                        <input 
                        type="password" 
                        placeholder="••••••••" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form__input" />
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