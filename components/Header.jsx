import React from 'react'
import Link from 'next/link'

const Header = () => {
  
    return (
      <header className='sticky bg-black top-0 z-50'>
      <nav className="container flex items-center py-4 ">
        <div className="py-1 w-8 h-8"><img src="/img/logo.png" alt="" /></div>
        <ul className="flex flex-1 justify-end items-center gap-12 text-bookmark-white uppercase text-xs flex-wrap">
          <Link className="cursor-pointer" href='/'>Home</Link>
          <Link className="cursor-pointer" href='/editions'>Editions</Link>
          <Link className="cursor-pointer" href='/#subscribe'>Subscribe</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header
