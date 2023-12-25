import React, { useState, useEffect } from 'react';
import Header from "../Template/Header";
import Footer from "../Template/Footer";
// import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCircleCheck);

const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ['inilogo.png', 'testimoni2.png', 'testimoni1.png', 'testimoni3.jpeg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change the interval as needed (milliseconds)

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const isiDataIt = [
    {
      id: 1,
      judulit: "Web",
      isiit1: "Laravel/ React Js",
      isiit2: "Revisi 3X",
      isiit3: "Basic , crud login dan laporan. untuk yg lain bisa di konsultasi",
      hargait: "Rp 4.000.000/Nego",
    },
    {
      id: 2,
      judulit: "Aplikasi Desktop",
      isiit1: "Java Netbeans",
      isiit2: "Revisi 3X",
      isiit3: "Basic , crud login dan laporan. untuk yg lain bisa di konsultasi",
      hargait: "Rp 1.500.000/Nego",
    },
    {
      id: 3,
      judulit: "Penulisan Skripsi IT",
      isiit1: "Penulisan Bab 1-5",
      isiit2: "revisi 3X",
      hargait: "Rp 2.500.000/Nego",
    },
  ];

  const cardsData1 = [
    {
      className:'pricing-card',
      id1: 1,
      title1: "Aplikasi Desktop",
      content1: "Java Netbeans",
      content2: "CRUD, Login dan Laporan",
      harga1: "Rp 500.000",
    },
    {
      id1: 2,
      title1: " Web ",
      content1: "Laravel/React JS",
      content2: "CRUD, Login dan Laporan",
      harga1: "Rp 1.500.000",
    },
  ];

  const cardsData2 = [
    {
      idbk: 1,
      titlebk: "Penulisan Seminar Proposal",
      contentbk1: " Pengerjaan proposal, laporan BAB 1-3",
      contentbk2: "Revisi 3X",
      contentbk3: "Kuantitatif/kualitatif",
      hargabk: "Rp 2.000.000/Nego",
    },
  ];

  const cardsData3 = [
    {
      idbebas: 1,
      titlebebas: "Memperbaiki Penulisan Skripsi Jurusan apapun",
      contentbebas1: "Bebas Memperbaiki dari bab 1 -5 ",
      contentbebas2: "Revisi 3X",
      contentbebas3: "Kuantitatif/kualitatif",
      hargabebas: "Bisa Konsultasi Untuk Harga",
    },
    {
      idbebas: 2,
      titlebebas: "Memperbaiki Program Coding",
      contentbebas1: "Bebas Memperbaiki program jenis apapun",
      contentbebas2: "Revisi 3X",
      contentbebas3: "laravel,React,Java Netbeans, CI",
      hargabebas: "Bisa Konsultasi Untuk Harga",
    },
  ];
  const renderCards = (data) => (
    <div className="pricing-card dark-mode" style={{rowGap:22 ,display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px', maxWidth: '100%' }}>
      {data.map((card) => (
        <div key={card.id} className={`pricing-item ${card.idbk ? 'cardsData2' : ''}`} style={{ color:'white',background:'#242c44',border: '1px solid white', padding: '10px', margin: '10px', width: '300px' }}>
          <div className="title">
            <p style={{ fontSize: '16px', margin: '10px 0' }}>{card.judulit || card.title1 || card.titlebk || card.titlebebas}</p>
          </div>
          <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{card.hargait || card.harga1 || card.hargabk || card.hargabebas}</p>
          <ul>
            <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /><span> {card.isiit1 || card.content1 || card.contentbk1|| card.contentbebas1}</span></li>
            
            {card.isiit2 || card.content2 || card.contentbk2 ||card.contentbebas2? (
              <li>
                <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                <span> {card.isiit2 || card.content2 || card.contentbk2 ||card.contentbebas2}</span>
              </li>
            ) : null} 
            {card.isiit3 || card.content3 || card.contentbk3||card.contentbebas3 ? (
              <li>
                <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                <span> {card.isiit3 || card.content3 || card.contentbk3||card.contentbebas3}</span>
              </li>
            ) : null}
          </ul>
          <a
            href="https://wa.me/+6283140813617"
            className="bg-white text-black rounded-xl mt-10"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              width: '100%',
              margin: '10px 0',
              background: 'green',
              fontSize: '14px',
              padding: '8px 16px',
              textAlign: 'center',
              color: 'white'
            }}
          >
            Hubungi
          </a>
        </div>
      ))}
    </div>
  );
  

  

  return (
    <div className='pricing-card dark-mode' style={{ minWidth: '100%', height: 'auto', background: 'linear-gradient(41deg, rgba(158,158,158,1) 75%, rgba(193,176,127,1) 87%, rgba(200,182,132,1) 91%, rgba(203,187,141,1) 92.7%, rgba(158,158,158,1) 79%)' }}>
      <div>
        <Header />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2px', marginTop: '4px' }}>
        <div>
<h1>Kelas IT</h1>
        {renderCards(cardsData1)}

        </div>
        <div>
          Bimbingan Konseling
        {renderCards(cardsData2)}

        </div>
        <div>
          Skripsi IT
        {renderCards(isiDataIt)}

        </div>        <div>
          Layanan 
        {renderCards(cardsData3)}

        </div>
      </div>

      {/* isi testimoni */}
      <div>
        <h1>
          <center>
            Testimoni
          </center>
        </h1>

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden' }}>
      <div style={{ display: 'flex', width: `${images.length * 100}%`, transform: `translateX(${-currentIndex * (100 / images.length)}%)`, transition: 'transform 0.5s ease-in-out' }}>
        {images.map((image,index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{width:`${100 / images.length}%`}}
          />
        ))}
      </div>
    </div>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
