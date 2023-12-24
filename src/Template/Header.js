import React, { useState } from 'react';
import { Link } from 'react-router-dom';




const Header = ({ scrollToLayanan, scrollToKelasIT }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };




  return (
    
    <header className='' style={{ background: 'linear-gradient(41deg, rgba(158,158,158,1) 55%, rgba(193,176,127,1) 67%, rgba(200,182,132,1) 71%, rgba(203,187,141,1) 76%, rgba(158,158,158,1) 79%)', color: '#DCD7C9', padding: '10px' }}>
<div>
<img src={process.env.PUBLIC_URL + '/inioke.png'} style={{width:'100px'}} alt="Inioke" />


</div>
      {/* Hamburger menu button for mobile */}


      {/* Desktop navigation */}
      {/* <div style={{ position: 'absolute', top: '40px', right: '20px', display: 'block' }}>
        <button className=''>
          <input
            className='rounded-lg'
            type="search"
            placeholder="Search"
          />
          <svg >
            <path style={{ color: 'darkblue' }} d="M120.386 15.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" strokeWidth="2" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
      </div> */}



      <div style={{ textAlign: 'center', marginTop: '-10px' }}>
        {/* Additional content can be added here */}
      </div>
    </header>
  );
};

export default Header;
