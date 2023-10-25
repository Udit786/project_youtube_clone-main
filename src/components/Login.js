import React from 'react'
import signin from '../assets/signin.svg'
import signup from '../assets/signup.svg'
import './Login.css'

import { Link, useNavigate } from 'react-router-dom';
const Login = (props) => {
    const onclick_sign_in_btn = () => {
        const container = document.querySelector(".container123");
        container.classList.remove("sign-up-mode");
    }
    const onclick_sign_in_btn2 = () => {
        const container = document.querySelector(".container123");
        container.classList.remove("sign-up-mode2");
    }
    const onclick_sign_up_btn = () => {
        const container = document.querySelector(".container123");
        container.classList.add("sign-up-mode");
    }
    const onclick_sign_up_btn2 = () => {
        const container = document.querySelector(".container123");
        container.classList.add("sign-up-mode2");
    }

    const navigate = useNavigate();

    const onsubmit = (event) => {
        event.preventDefault()
        props.user_stat.setUserInfo(props.user_stat.userInfo)
        onclick_sign_in_btn()
        onclick_sign_in_btn2()
    }
    const onsubmit1 = (event) => {
        event.preventDefault()
        let username = event.target.elements['sign_in_username'].value;
        let password = event.target.elements['sign_in_password'].value;

        if (props.user_stat.userInfo.username === username && props.user_stat.userInfo.password === password) {
            props.user_stat.setLoginStatus("Profile")
            navigate('/Dev-Wizards-NGO.github.io');
        }
        else {
            alert('Incorrect username or password!');
        }
    }

    const onchange_sign_up = (event) => {
        const { name, value } = event.target
        if (name === "name") {
            props.user_stat.setUserInfo((prevalue) => ({
                ...prevalue,
                name: value
            }))
        }
        else if (name === "username") {
            props.user_stat.setUserInfo((prevalue) => ({
                ...prevalue,
                username: value
            }))
        }
        else if (name === "email") {
            props.user_stat.setUserInfo((prevalue) => ({
                ...prevalue,
                email: value
            }))
        }
        else if (name === "password") {
            props.user_stat.setUserInfo((prevalue) => ({
                ...prevalue,
                password: value
            }))
        }

    }

    return (
        <div className="login_body">
            <div className="container123">
                <div className="signin-signup">
                    <form onSubmit={onsubmit1} className="sign-in-form">
                        <h2 className="title123">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" name='sign_in_username' defaultValue="" autoComplete='current-username' required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" name='sign_in_password' defaultValue="" autoComplete='current-password' required />
                        </div>
                        <button type="submit" value="Login" className="btn123">Sign In</button>
                        <p className="social-text123">Or Sign in</p>
                        <div className="social-media123">
                            <a href="/" className="social-icon123">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="/" className="social-icon123">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="/" className="social-icon123">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="/" className="social-icon123">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <p className="account-text">Don't have an account? <Link to="/Dev-Wizards-NGO.github.io/signup_login" id="sign-up-btn2" onClick={onclick_sign_up_btn2}>Sign up</Link></p>
                    </form>
                    <form onSubmit={onsubmit} className="sign-up-form">
                        <h2 className="title123">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-file-signature"></i>
                            <input type="text" placeholder="Name" id='sign_up_name' onChange={onchange_sign_up} name='name' autoComplete='current-name' required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" id='sign_up_username' onChange={onchange_sign_up} name='username' autoComplete='current-username' required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" id='sign_up_email' onChange={onchange_sign_up} name='email' autoComplete='current-email' required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" id='sign_up_password' onChange={onchange_sign_up} name='password' autoComplete='current-password' required />
                        </div>
                        <button type="submit" value="Sign up" className="btn123" >Sign Up</button>
                        <p className="social-text123">Or Sign in with social platform</p>
                        <div className="social-media123">
                            <a href="/" className="social-icon123">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="/" className="social-icon123">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="/" className="social-icon123">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="/" className="social-icon123">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <p className="account-text">Already have an account? <Link to="/Dev-Wizards-NGO.github.io/signup_login" id="sign-in-btn2" onClick={onclick_sign_in_btn2}>Sign in</Link></p>
                    </form>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content123">
                            <h3>Member of our Website</h3>
                            {/* <p>By logging in, you become part of our mission to create positive change in the world. Together, we can make a lasting impact.</p> */}
                            <button className="btn123" id="sign-in-btn" onClick={onclick_sign_in_btn}>Sign in</button>
                        </div>
                        <img src={signin} alt="" className="image" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content123">
                            <h3>New to our Website?</h3>
                            <p>Sign up to be a part of our website.</p>
                            <button className="btn123" id="sign-up-btn" onClick={onclick_sign_up_btn}>Sign up</button>
                        </div>
                        <img src={signup} alt="" className="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
