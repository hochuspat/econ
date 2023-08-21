import React from 'react'

import Head from 'next/head'
import BachelorSection from '@/components/BachelorSection'
import styles from '@/styles/Pervak.module.css';
import Navigation from '@/components/Navigation';

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
        <BachelorSection />
      </main>
    </div>
  )
}

