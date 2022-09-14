import React from 'react';
import Bar from '../../svg/bar.svg';
import Growing from '../../svg/growing.svg';
import Search from '../../svg/search.svg';
import './style.scss';

export default function About(){
  return (
    <div id="about" className="d-flex flex-column about">
      <span className="main-title text-center">About Us</span>
      <p className="paragraph text-center">
        Selamat Data di halaman kami. Disini kami menyediakan layanan ERP untuk perusahaan - perusahaan besar. Kami adalah salah satu service ERP terbaik di Indonesia. Anda tidak akan kecewa dengan layanan kami. Kami akan melakuakan yang terbaik yang bisa kami lakukan untuk kepuasan anda.
      </p>
      <div className="d-flex justify-content-between mt-5 image-container">
        <img alt="Bar" className="about-img" src={Bar} />
        <img alt="Growing" className="about-img" src={Growing} />
        <img alt="Search" className="about-img" src={Search} />
      </div>
    </div>
  );
}