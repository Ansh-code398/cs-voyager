import React, {useEffect} from 'react';

import '../styles/globals.scss';
import '../styles/navbar.css';
import '../styles/footer.css';
import '../styles/header.css';
import '../styles/about.css';
import '../styles/feature.css';
import '../styles/team.css';
import { Layout } from '../components/index.js';
// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
        duration: 2000,
    });
    Aos.refresh()
}, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;