import React from 'react';
import SE from '../../svg/software-engineer.svg';
import './style.scss';

export default function Welcome(){
  return (
    <div className="d-flex jumbotron">
      <div className="justify-content-center align-items-center text-center flex-1 jumbotron-text">Welcome to ERP Page!</div>
      <div className="justify-content-center align-items-center flex-1 img-container ">
        <img className="img" alt="Software Engineer" src={SE} />
      </div>
    </div>
  )
}