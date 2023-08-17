import React from 'react';
import Istor from '@/components/Istor';
import styles from '@/styles/Home.module.css';
import Navigation from '@/components/Navigation';
import Head from 'next/head';
import Footer from '@/components/Footer';

const Fack = () => {
  return (
      <div className={styles.container2}>
        <Navigation />
        <Head>
          <title>Экономический факультет КубГУ</title>
          <meta name="description" content="Сайт вашего факультета" />
          <link rel="icon" href="/your-logo-image.svg" />
        </Head>

  
              <Istor />
        <Footer />
      </div>

  );
};

export default Fack;
