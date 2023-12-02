import React, { useState } from "react";
import './Signup.css';
import logo from '../netflixappimgs/logo.png';

function Signup() {
    const [showPassword, setShowPassword] = useState(false);

    const changePagetoHome = () => {
        window.location.href = "http://localhost:3000/home";
    }

    const changePagetoSignin = () => {
        window.location.href = "http://localhost:3000/";
    }

    let fields;

    if (showPassword) {
        fields = (
            <div className="signupPasswordBtn">
                <input type="email" id="signupEmail" name="signupEmail" placeholder="Email address"></input>
                <input type="password" id="signupPassword" name="signupPassword" placeholder="Password"></input>
            </div>
        );
    } else {
        fields = (
            <div className="signupEmailBtn">
                <input type="email" id="signupEmail" name="signupEmail" placeholder="Email address"></input>
                <button type="submit" className="signupBtn" onClick={() => setShowPassword(true)}>Get Started {'>'}</button>
            </div>
        );
    }

    return (
        <div className="signup">
            <img src={logo} alt="Netflix" className="logo"></img>
            <h1 className="signupHeading">Unlimited movies, TV shows, and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            {fields}
            <button type="button" className="signUp" onClick={changePagetoHome}>Sign Up</button>
            <button type="button" className="signIn" onClick={changePagetoSignin}>Sign In</button>
        </div>
    );
}

export default Signup;
