import React from 'react';
import Logo from '../assets/logo_transparent.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt='' style={{ width: '200px', height: 'auto' }} />
          </a>
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
