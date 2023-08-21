import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/SchoolStudentsSection.module.css';
import Head from 'next/head';
import Navigation from '@/components/Navigation';

import YoungEntrepreneursSchool from '@/components/YoungEntrepreneursSchool';
import FinancialLiteracySchool from '@/components/FinancialLiteracySchool';
import WeekendEconomistSchool from '@/components/WeekendEconomistSchool';
import PreparationForEconomicsOlympiad from '@/components/PreparationForEconomicsOlympiad';
import PreparationForEconomicsCompetition from '@/components/PreparationForEconomicsCompetition';



const SchoolStudentsSection = () => {

  const [textArray, settextArray] = useState({});


  useEffect(() => {
    async function fetchtextArray() {
      try {
        const response = await fetch('http://192.168.10.105:8000/textArray4');
        if (response.ok) {
          const data = await response.json();
          settextArray(data);
        } else {
          console.error('Error fetching school data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching school data:', error);
      }
    }
    fetchtextArray();
  }, []);



  return (
    <div className={styles.container}>
      <Navigation />
      <Head>
        <title>Экономический факультет КубГУ</title>
        <meta name="description" content="Сайт вашего факультета" />
        <link rel="icon" href="/your-logo-image.svg" />
      </Head>
      <h1 className={styles.title1}>Школьникам</h1>
        <p className={styles.description}>
        {textArray.title}
        </p>
      <div className={styles.grid}>
        <YoungEntrepreneursSchool />
        <FinancialLiteracySchool />
        <WeekendEconomistSchool />
        <PreparationForEconomicsOlympiad />
        <PreparationForEconomicsCompetition />
      </div>
    </div>
  );
};

export default SchoolStudentsSection;
