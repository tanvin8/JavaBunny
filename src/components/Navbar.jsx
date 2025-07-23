import React from 'react';
import { Link } from 'react-router-dom'; // Import Link


function Navbar() {
  return (
    <nav className = "bg-champagne font-quicksand text-xl">
    <div className='hidden md:flex items-center space-x-8 text-m justify-center '>
        <Link to="/" className='hover:text-golden font-bold mt-20 mb-10 ml-20 text-center' aria-label="About Page">
            Home
          </Link>
          <Link to="/intro-to-java" className='hover:text-golden font-bold mt-20 mb-10 ml-20 text-center' aria-label="About Page">
            Intro To Java
          </Link>
          <Link to="/beginner" className='hover:text-golden font-bold mt-20 mb-10 ml-20 text-center' aria-label="About Page">
            Beginner
          </Link>
          <Link to="/intermediate" className='hover:text-golden font-bold mt-20 mb-10 ml-20 text-center' aria-label="About Page">
            Intermediate
          </Link>
    </div>
    </nav>
  );
}

export default Navbar;
