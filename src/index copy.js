import React from 'react';
import './style.css';
import logo from '../../assets/images/loginimg.PNG';
import fb from '../../assets/images/facebook_icon.png';
import google from '../../assets/images/google_icon.png';
import line from '../../assets/images/Line.png';
import { Form, Col, Button } from "react-bootstrap";


const Login = () => {
    return (
        <div className="login-container">
            <div className="login-left">
                <img className="login-image" src={logo} alt="" />
                <p className="login-text">
                    CodeTutor is a system designed to help you improve your code comprehension skills. It gives you different code comprehension challenges and you collect points as you accomplish challenges.
                    It's fun and at the same time improves your code understanding.
                </p>
                <p className="login-text">
                    The code-related challenges may range simply from "drag and drop" the higher-level logical steps or more deeper logical details or finer statement level for beginner or novice programmers. For the advanced programmer, the challenge comes as  "write answer yourself".
                </p>
            </div>
            <div className="login-right">
                <div className="login-form-content">
                <h1 className="login-form-text">Login</h1>
                <Form className="login-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="form-label-text">Email</Form.Label>
                        <Form.Control className="form-placeholder-text" type="email" placeholder="mail@website.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="form-label-text">Password</Form.Label>
                        <Form.Control className="form-placeholder-text" type="password" placeholder="Min. 6 characters" />
                    </Form.Group>
                    <p className="forget-pwd-text">Forget Password?</p>
                    <Button className="login-btn-submit" type="submit">
                        Login
                    </Button>
                </Form>
                <div className="create-account">
                    <p>Not registered yet?</p>
                    <p className="create-link">
                        Create an Account
                    </p>
                </div>
               
                </div>
         
                <div className="social-login">
                    <img src={line}/>
                    <p className="continue-with">or continue with</p>
                    <img src={line}/>
                </div>
                <div className="social-login-icon">
                    <img src={google} alt=""/>
                    <img className="social-icon" src={fb} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Login;