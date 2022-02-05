import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

const Layout = ({ children }) => (
  <>
    <Head>
      <link rel="shortcut icon" href="/img/logo.png" type="image/x-icon" />
    </Head>
    <Navbar />
    {children}
    {/* Footer */}
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src="/img/logo.png" alt="gpt3_logo" />
          <b className='text-center'>CS Voyager <br /> All Rights Reserved</b>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Navigation</h4>
          <Link href="/">Home</Link>
          <Link href="/editions">Editions</Link>
          <Link href="/#subscribe">Subscribe</Link>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Contact</h4>
          <a href="https://discord.gg/AkR6U7eF6S" target="_blank" rel='noopener'>Discord</a>
          <a href="https://discord.gg/AkR6U7eF6S" target="_blank" rel='noopener'>Mail</a>
          <a href="/#team">Team</a>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>Copyright &copy; 2022 <b>CS Voyager</b>. All rights reserved.</p>
      </div>
    </div>
    <Script src="https://kit.fontawesome.com/8f366c7ba6.js" crossOrigin="anonymous"></Script>
  </>
);

export default Layout;