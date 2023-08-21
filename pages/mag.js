// Импортируем React и Next.js
import React from 'react'

// pages/index.js
import Head from 'next/head'
import BachelorSectionMag from '@/components/BachelorSectionMag'
import styles from '@/styles/Pervak.module.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer'; 

export default function Home() {
  return (
    <div className={styles.container}>
    <Navigation />
    <Head>
      <title>Экономический факультет КубГУ</title>
      <meta name="description" content="Сайт вашего факультета" />
      <link rel="icon" href="/your-logo-image.svg" />
    </Head>
  <main className={styles.container}>
        <BachelorSectionMag />
      </main>
      <Footer/>

    </div>
  )
}

