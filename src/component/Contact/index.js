import React from 'react';
import Location from '../../svg/location.svg';
import Envelope from '../../svg/envelope.svg';
import User from '../../svg/user.svg';
import './style.scss';

export default function Contact(){
  return (
    <div id="contact" className="d-flex align-items-center flex-column contact">
      <span className="main-title text-center">Contact</span>
      <div className="d-flex flex-row contact-item mt-5">
        <img alt="location" className="contact-icon" src={Location} />
        <span className="ms-3 bold">Jln. Dimana mana</span>
      </div>
      <div className="d-flex flex-row contact-item">
        <img alt="location" className="contact-icon" src={Envelope} />
        <span className="ms-3 bold">halo@mail.com</span>
      </div>
      <div className="d-flex flex-row contact-item">
        <img alt="location" className="contact-icon" src={User} />
        <span className="ms-3 bold">+62394940304940</span>
      </div>
    </div>
  )
}