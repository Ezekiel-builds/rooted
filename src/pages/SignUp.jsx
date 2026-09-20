import { supabase } from "../supabaseClient";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import google from '../assets/Google.png';
import logoImg from '../assets/logo.png';
import './SignUp.css';
import { Link } from "react-router-dom";

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [churchName, setChurchName] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    
    async function handleSignUp(e) {
        e.preventDefault();
        setErrorMessage(null);

        const {data, error} = await supabase.auth.signUp({
            email,
            password
        });

        if(error) {
            setErrorMessage(error.message);
            console.log(error.message);
            return;
        };

        console.log(data);

        const newUser = data.user;

        const { error: profileError } = await supabase
        .from('profiles')
        .insert({
            id: newUser.id,
            full_name: fullName,
            church_name: churchName
        });

        if(profileError) {
            console.log(profileError.message);
        } else {
            console.log('Acoount created successfully');
        }
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
                        Begin Journey
                    </h3>

                    <p className="form__description">
                        Create your account to start cultivating daily
                        rhythms of Word, prayer, and life together.
                    </p>
                </div>

                <form className="signUp__form" onSubmit={handleSignUp}>
                    <div className="form__meta">
                        <label htmlFor="Full name" className="form__label">Full Name</label>
                        <input 
                        type="text" 
                        placeholder="Jane Doe"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)} 
                        className="form__input" 
                        />
                    </div>

                    <div className="form__meta">
                        <label htmlFor="Church name" className="form__label">Church Name<span>(Optional)</span></label>
                        <input 
                        type="text" 
                        placeholder="Grace Community Church" 
                        value={churchName}
                        onChange={(e) => setChurchName(e.target.value)}
                        className="form__input" />
                    </div>

                    <div className="form__meta">
                        <label htmlFor="Full name" className="form__label">Email Address</label>
                        <input 
                        type="email" 
                        placeholder="Jane@example.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form__input" />
                    </div>

                    <div className="form__meta">
                        <label htmlFor="Full name" className="form__label">Password</label>
                        <input 
                        type="password" 
                        placeholder="••••••••" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form__input" />
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
                        Already have an account? <Link to="/sign-in">Sign In</Link>
                    </p>
                </div>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default SignUp;