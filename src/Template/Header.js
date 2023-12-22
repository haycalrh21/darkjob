import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ scrollToLayanan, scrollToKelasIT }) => {
  return (
    <header style={{ backgroundColor: '#A27B5C', color: '#DCD7C9', padding: '10px' }}>
      <h1 style={{  fontSize: '24px' }}>
        Layanan Joki Skripsi
      </h1>
      <Link
          to="/#layanan"
          onClick={scrollToLayanan}
          style={{ textDecoration: 'none', padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', borderRadius: '4px', marginRight: '10px' }}
        >
          Layanan
        </Link>
        <Link
          to="/#kelasit"
          onClick={scrollToKelasIT}
          style={{ textDecoration: 'none', padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', borderRadius: '4px' }}
        >
          Kelas IT
        </Link>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>

      </div>
    </header>
  );
};

export default Header;
