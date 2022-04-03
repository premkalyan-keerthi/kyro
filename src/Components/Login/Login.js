import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";

import fb from "../socialmedia/facebook.svg";
import insta from "../socialmedia/instagram.svg";
import lk from "../socialmedia/linkedin.svg";

import "./Login.css";

export function Login(props) {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(password) === "") {
      navigate("/tv-series");
      setName("");
      setPassword("");
    }
  };

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      return "";
    } else if (validator.isEmpty(value)) {
      return "*Please enter a value";
    } else {
      return "*Is Not Strong Password";
    }
  };

  return (
    <div className="container">
      <div className="title-box">
        <h1 className="title">Kyro</h1>
      </div>
      <center>
        <div className="container input-box">
          <form onSubmit={handleSubmit} className="form-custom-styles">
            <div className="row">
              <label>Name: </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="row">
              <label className="password-text">Password:</label>
              <input
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onBlur={() => {
                  setErrorMessage(validate(password));
                }}
                onFocus={() => {
                  setErrorMessage("");
                }}
              />
            </div>
            <span className="error-message">{errorMessage}</span>
            <input
              type="submit"
              className="submit"
              disabled={!(name && password) || validate(password)}
            />
          </form>
        </div>
        <div className="social-media-container">
          <span>SOCIAL MEDIA</span>
          <div className="social-images-container">
            <img src={fb} alt="fb" className="social-media-image" />
            <img src={insta} alt="insta" className="social-media-image" />
            <img src={lk} alt="lk" className="social-media-image" />
          </div>
        </div>
      </center>
    </div>
  );
}
