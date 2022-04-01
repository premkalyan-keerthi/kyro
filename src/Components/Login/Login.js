import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import validator from 'validator';
import fb from '../socialmedia/facebook.svg'
import insta from '../socialmedia/instagram.svg'
import lk from '../socialmedia/linkedin.svg'

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        setName('')
        setPassword('')
    }
    const [errorMessage, setErrorMessage] = useState('')
    const validate = (value) => {

        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Is Strong Password')
        } else {
            setErrorMessage('Is Not Strong Password')
        }
    }
    return (
        <div className='container'>
            <div className='title'>
                <h1 className='title-box'>Kyro</h1>
            </div>
            <center>
                <div className='container input-box'>
                    <form onSubmit={handleSubmit}>

                        <div className='row1'>
                            <label>UserID:  </label>
                            <input type='email' value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className='row1'>
                            <label>Name:  </label>
                            <input type='text' value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className='row'>
                            <label className='labelp'>Password:</label>
                            <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
                        </div>

                        <input type='submit' className='submit'></input>

                    </form>
                </div>
                <div className="socialmedia" >
                    <p className="aboutus">SOCIAL MEDIA</p>
                    <div className="socialmediaimages">
                        <img src={fb} alt="fb" /> &nbsp; <img src={insta} alt="insta" /> &nbsp; <img src={lk} alt="lk" />
                    </div>
                </div>

            </center>

        </div>
    );
}

export default Login;