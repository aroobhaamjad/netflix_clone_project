import React from "react";
import logo from '../netflixappimgs/logo.png'
import './Login.css'

function Login(){

    const changePagetoHome = () => {
        window.location.href = "http://localhost:3000/home";
    }

    return(
        <div className="login">
            <img src={logo} alt="Netflix" className="logo"></img>
            <form className="loginform">
                <p className="heading">Sign In</p>
                <input type="email" id="loginemail" placeholder="Email or phone number"></input>
                <input type="password" id="loginpassword" placeholder="Password"></input>
                <button type="button" className="loginBtn" onClick={changePagetoHome}>Sign In</button>
                <div className="rem">
                    <div>
                        <input type="checkbox" id="RememberMe" name="RememberMe"></input>
                        <label for="RememberMe">Remember me</label>
                    </div>
                    <p className="needHelp">Need help?</p>
                </div>
                <div className="signuprow">
                    <p className="newToNetflix">New to Netflix?</p>
                    <a href="/signup" className="signupNow">Sign up now.</a>
                </div>
                <p className="recaptchaLine">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
            </form>
            <footer className="footer">
                <p className="contactus">Questions? Contact us</p>
                <div className="footerrow">
                    <p className="faq">FAQ</p>
                    <p className="helpcenter">Help Center</p>
                    <p className="termsofuse">Terms of Use</p>
                    <p className="privacy">Privacy</p>
                    <p className="cookie">Cookie Preferences</p>
                    <p className="info">Corporate Information</p>
        </div>
            </footer>
        </div>
    );
}

export default Login;