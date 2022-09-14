import React from 'react';
import './style.scss';

export default function Header(){
    return (
      <div className="d-flex flex-row align-items-center px-4 header">
        <a href="/" className="bold main-title">Home</a>
        <div className="bg-absolute" />
        <div className="d-flex flex-row justify-content-end flex-1 tabs">
            <a href="#about" className="tab">ABOUT</a>
            <a href="#pricing" className="tab">PRICING</a>
            <a href="#contact" className="tab">CONTACT</a>
            <button className="btn btn-login">Login</button>
        </div>
      </div>
    )
}