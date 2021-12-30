import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import Header from './Header';
import Link from 'next/link';

const Layout = ({ children }) => (
  <>
  <Head>
    <link rel="shortcut icon" href="/img/logo.png" type="image/x-icon"/>
  </Head>
    <Header />
    {children}
    {/* Footer */}
    <footer className="bg-bookmark-blue py-8">
                <div className="container flex flex-col md:flex-row items-center">
                    <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
                        <img src="/img/logo.png" className="w-8 h-8" alt="" />
                        <ul className="flex text-white uppercase gap-12 text-xs kex-wrap">
                            <Link className="cursor-pointer" href='/'>Home</Link>
                            <Link className="cursor-pointer" href='/blog'>Blog</Link>
                            <Link className="cursor-pointer" href='/#subscribe'>Subscribe</Link>
                        </ul>
                    </div>
                    <div className="flex gap-10 mt-12 md:mt-0">
                        
                        <p className="cursor-pointer text-white text-2xl">
                            Copyright &copy; 2021 CS Voyager
                        </p>
                        
                    </div>
                </div>
            </footer>
    <Script src="https://kit.fontawesome.com/8f366c7ba6.js" crossOrigin="anonymous"></Script>
  </>
);

export default Layout;