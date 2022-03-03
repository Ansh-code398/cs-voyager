import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useRouter } from 'next/router';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import { Progress } from './Bar';

const Navbar = ({isAnimating}) => {
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isPostPage, setIsPostPage] = useState(false);

  useEffect(() => {
    router.pathname.includes('post') ? setIsPostPage(true) : setIsPostPage(false);
  }, [router]);


  return (
    <div className={`gpt3__navbar ${!isPostPage && 'sticky top-0'}`}>
      <Progress isAnimating={isAnimating} />
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <IconButton variant='contained' color='primary'>
            <Link href="/">
              <img src="/img/logo.png" />
            </Link>
          </IconButton>
        </div>
        <div className="flex-1"></div>
        <div className="gpt3__navbar-links_container">
          <Button variant='contained' color='secondary'>
            <p><Link href="/">Home</Link></p>
          </Button>
          <Button variant='contained' color='secondary'>
            <p><Link href="/editions">Editions</Link></p>
          </Button>
          <Button variant='contained' color='secondary'>
            <p><Link href="/#subscribe">Subscribe</Link></p>
          </Button>
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