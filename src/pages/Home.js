import React, { useRef } from 'react';
import Header from "../Template/Header";
import { Link } from "react-router-dom";

const Home = () => {
  // Data dummy untuk card
  const cardsData = [
    {
      id: 1,
      title: "Web",
      content: "Isinya adalah bikin website dll",
      content2: "revisi 3X",

      harga: "RP 4.000.000/Nego",
    },
    {
      id: 2,
      title: " Aplikasi Desktop",
      content: "Isinya adalah bikin tampilan Java Netbeans Desktop",
      content2: "revisi 3X",
      harga: "RP 1.500.000/Nego",
    },
    {
      id: 3,
      title: "Penulisan Skripsi IT",
      content: "Penulisan Bab 1-5",
      content2: "revisi 3X",
      harga: "RP 3.500.000/Nego",
    }
  ];

  const layananRef = useRef(null);
  const kelasitRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  const cardsData1 = [
    {
      id1: 1,
      title1: "Aplikasi Desktop",
      content1: "Isinya adalah bikin website dll",
      harga1: "RP 500.000",
    },
    {
      id1: 2,
      title1: " Web ",
      content1: "Isinya adalah bikin tampilan Java Netbeans Desktop",
      harga1: "RP 1.500.000",
    },
  ];
  const cardsData2 = [
    {
      idbk: 1,
      titlebk: "Penulisan Seminar Proposal",
      contentbk1: " Pengerjaan proposal, laporan BAB 1-3",
      contentbk2: "Revisi 3X",
      contentbk3: "Kuantiatif/kualitatif",
      hargabk: "RP 2.500.000/Nego",
    }
   
  ];

  // Membagi cardsData menjadi kelompok-kelompok berisi masing-masing 5 card
  const groupedCards = [];
  for (let i = 0; i < cardsData.length; i += 5) {
    groupedCards.push(cardsData.slice(i, i + 5));
  }

  const groupedCards1 = [];
  for (let i = 0; i < cardsData1.length; i += 5) {
    groupedCards1.push(cardsData1.slice(i, i + 5));
  }
  const groupedCards2 = [];
  for (let i = 0; i < cardsData2.length; i += 5) {
    groupedCards2.push(cardsData2.slice(i, i + 5));
  }
  const scrollToLayanan = () => {
    scrollToRef(layananRef);
  };

  const scrollToKelasIT = () => {
    scrollToRef(kelasitRef);
  };



  return (
    <div style={{ backgroundColor: "#2C3639", color: "#DCD7C9" }}>
       <Header scrollToLayanan={() => scrollToRef(layananRef)} scrollToKelasIT={() => scrollToRef(kelasitRef)} />
      <main>

      <div ref={layananRef}>
        <h1>Selamat Datang di Layanan Joki Skripsi</h1>
        <p>
          Kami menyediakan jasa untuk membantu Anda dalam menyelesaikan skripsi
          Anda. Silakan jelajahi layanan kami dan hubungi kami jika Anda
          membutuhkan bantuan.
        </p>

       

<h1>IT</h1>
        {groupedCards.map((group, groupIndex) => (
          <div
            key={groupIndex}
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            {group.map((card) => (
              <div
                key={card.id}
                style={{
                  backgroundColor: "#3F4E4F",
                  color: "#DCD7C9",
                  width: "auto",
                  border: "1px solid #ccc",
                  padding: "15px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  position: "relative",
                  paddingBottom: "15px",
                }}
              >
                <h3>{card.title}</h3>
                <p>{card.content}</p>
                <p>{card.content2}</p>
                <p>{card.content3}</p>
                {/* Menetapkan elemen harga di bagian bawah card */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    marginBottom: "2px",
                  }}
                >
                  {card.harga}
                </div>
              </div>
            ))}
          </div>
        ))}
        </div>
      </main>

      <div ref={kelasitRef}>
        <h1>Selain itu kami juga membuka kelas IT</h1>
        {groupedCards1.map((group, groupIndex) => (
          <div
            key={groupIndex}
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            {group.map((card) => (
              <div
                key={card.id1}
                style={{
                  backgroundColor: "#3F4E4F",
                  color: "#DCD7C9",
                  width: "auto",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  position: "relative",
                }}
              >
                <h3>{card.title1}</h3>
                <p>{card.content1}</p>

                <div style={{ position: "absolute", bottom: -15 }}>
                  <p>{card.harga1}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
      <h1>Bimbingan Konseling</h1>
        {groupedCards2.map((group, groupIndex) => (
          <div
            key={groupIndex}
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            {group.map((card) => (
              <div
                key={card.idbk}
                style={{
                  backgroundColor: "#3F4E4F",
                  color: "#DCD7C9",
                  width: "auto",
                  border: "1px solid #ccc",
                  padding: "15px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  position: "relative",
                  paddingBottom: "15px",
                }}
              >
                <h3>{card.titlebk}</h3>
                <p>{card.contentbk1}</p>
                <p>{card.contentbk2}</p>
                <p>{card.contentbk3}</p>
                {/* Menetapkan elemen harga di bagian bawah card */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    marginBottom: "2px",
                  }}
                >
                  {card.hargabk}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
