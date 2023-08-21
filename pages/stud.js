// StudentLifeScreen.js
import React from 'react'
import StudentCouncilSection from '@/components/StudentCouncilSection'
import StudentUnionSection from '@/components/StudentUnionSection'
import ScholarshipsSection from '@/components/ScholarshipsSection'
import CareerGuidanceSection from '@/components/CareerGuidanceSection'
import DormitorySection from '@/components/DormitorySection'
import styles from '@/styles/Stud.module.css';
import Head from 'next/head'
import Navigation from '@/components/Navigation';

export default function StudentLifeScreen() {
  return (
    <div className={styles.container}>
            <Navigation />
    <Head>
      <title>Экономический факультет КубГУ</title>
      <meta name="description" content="Сайт вашего факультета" />
      <link rel="icon" href="/your-logo-image.svg" />
    </Head>

      <h1>Студенческая жизнь</h1>
      <StudentCouncilSection />
      <StudentUnionSection />
      <ScholarshipsSection />
      <CareerGuidanceSection />
      <DormitorySection />
    </div>
  )
}
