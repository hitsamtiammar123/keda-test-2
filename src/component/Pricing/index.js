import React from 'react';
import './styles.scss'

export default function Pricing(){
  return (
    <div id="pricing" className="d-flex flex-column justify-content-evenly pricing">
        <span className="main-title text-center" >Pricing</span>
        <div className="d-flex flex-row justify-content-center items">
          <div className="item">
            <h2 className="mb-3 text-center">Tier 1 - Basic</h2>
            <ul className="mb-3">
              <li>Mencatat barang masuk</li>
              <li>Mencatat barang keluar</li>
              <li>Mencatat hasil keuntungan</li>
            </ul>
            <h6 className="bold text-center">Harga Mulai dari: </h6>
            <h4 className="bold text-center">Rp. 1,000,000</h4>
            <button className="btn btn-success">Pilih</button>
          </div>
          <div className="item">
            <h2 className="mb-3 text-center">Tier 2 - Bussiness</h2>
            <ul className="mb-3">
              <li>Mencatat barang masuk dan keluar</li>
              <li>Mencatat Keuntungan</li>
              <li>Dapat menganalisa hasil penjualan dengan CHART</li>
              <li>Support 7x24 Jam</li>
            </ul>
            <h6 className="bold text-center">Harga Mulai dari: </h6>
            <h4 className="bold text-center">Rp. 5,000,000</h4>
            <button className="btn btn-success">Pilih</button>
          </div>
          <div className="item">
            <h2 className="mb-3 text-center">Tier 3 - Entrepreneur</h2>
            <ul className="mb-3">
              <li>Mencatat barang masuk dan keluar</li>
              <li>Mencatat Keuntungan</li>
              <li>Dapat menganalisa hasil penjualan dengan CHART </li>
              <li>Support 7x24 Jam</li>
              <li>Export data ke Excel</li>
              <li>AI Prediksi penghasilan</li>
            </ul>
            <h6 className="bold text-center">Harga Mulai dari: </h6>
            <h4 className="bold text-center">Rp. 10,000,000</h4>
            <button className="btn btn-success">Pilih</button>
          </div>
        </div>
    </div>
  )
} 