import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useProgressStore } from '../useProgressStore';

const Layout = ({ children }) => {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
    const isAnimating = useProgressStore((state) => state.isAnimating);
    const router = useRouter();
    useEffect(() => {
        const handleStart = () => {
            setIsAnimating(true);
        };
        const handleStop = () => {
            setIsAnimating(false);
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleStop);
        router.events.on('routeChangeError', handleStop);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleStop);
            router.events.off('routeChangeError', handleStop);
        };
    }, [router]);

  return (
  <>
    <Head>
      <link rel="shortcut icon" href="/img/logo.png" type="image/x-icon" />
      <meta name="og:description" content="Cs Voyager \n A Computer Science Related Newsletter" />
      <meta name="og:title" content="Cs Voyager" />
      <meta name="og:url" content={`https://csvoyager.vercel.app`} />
      {/* Meta Keywords */}
      <meta name='keywords' content='newsletter, csvoyager, csv, computer science newsletter' />
    </Head>
    <Navbar isAnimating={isAnimating} />
    
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
}

export default Layout;