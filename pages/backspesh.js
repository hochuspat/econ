import React from 'react';
import PreparationForAdmission from '@/components/PreparationForAdmission';
import InternationalCollaboration from '@/components/InternationalCollaboration';
import styles from '@/styles/Stud.module.css';
import Head from 'next/head'
import Navigation from '@/components/Navigation';

const BachelorAndSpecialitySection = () => {
  return (
    <div className={styles.container}>
            <Navigation />
    <Head>
      <title>Экономический факультет КубГУ</title>
      <meta name="description" content="Сайт вашего факультета" />
      <link rel="icon" href="/your-logo-image.svg" />
    </Head>

      <h2 className={styles.title1}>Бакалавриат + специалитет</h2>
      <PreparationForAdmission />
      <InternationalCollaboration />
    </div>
  );
};

export default BachelorAndSpecialitySection;
