import React from 'react'
import Link from 'next/link'

const Header = () => {
  
    return (
      <header className='sticky'>
      <nav className="container flex items-center py-4 mt-4 sm:mt-12">
        <div className="py-1 w-8 h-8"><img src="/img/logo.png" alt="" /></div>
        <ul className="flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs flex-wrap">
          <Link className="cursor-pointer" href='/'>Home</Link>
          <Link className="cursor-pointer" href='/blog'>Blog</Link>
          <Link className="cursor-pointer" href='/#subscribe'>Subscribe</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header
