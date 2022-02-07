import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isPostPage, setIsPostPage] = useState(false);

  useEffect(() => {
    router.pathname.includes('post') ? setIsPostPage(true) : setIsPostPage(false);
  }, [router]);
  

  return (
    <div className={`gpt3__navbar ${!isPostPage && 'sticky top-0'}`}>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src="/img/logo.png" />
        </div>
        <div className="flex-1"></div>
        <div className="gpt3__navbar-links_container">
          <p><Link href="/">Home</Link></p>
          <p><Link href="/editions">Editions</Link></p>
          <p><Link href="/#subscribe">Subscribe</Link></p>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><Link href="/">Home</Link></p>
            <p><Link href="/editions">Editions</Link></p>
            <p><Link href="/#subscribe">Subscribe</Link></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;