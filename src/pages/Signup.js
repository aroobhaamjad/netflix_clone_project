import React from "react";
import styled from "styled-components";
import './Signup.css'
import logo from '../netflixappimgs/logo.png'

function Signup(){
    return (
    <div className="signup">
        <img src={logo} alt="Netflix" className="logo"></img>
        <h1 className="signupHeading">Unlimited movies, TV shows, and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="signupEmailBtn">
            <input type="email" id="signupEmail" name="signupEmail" placeholder="Email address"></input>
            <button type="submit" className="signupBtn">Get Started {'>'}</button>
        </div>
        <button type="submit" className="signIn">Sign In</button>
    </div>
    );
}

export default Signup;