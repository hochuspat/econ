import React from 'react';
import LeadershipSection from '@/components/LeadershipSection';
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

  
              <LeadershipSection />
        <Footer />
      </div>

  );
};

export default Fack;
