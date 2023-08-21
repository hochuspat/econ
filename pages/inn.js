import Head from 'next/head'
import Navigation from '@/components/Navigation';
import ConferencesSection from '@/components/ConferencesSection';
import StudentScientificSocietySection from '@/components/StudentScientificSocietySection';
import styles from '@/styles/DocumentsPage.module.css'; 


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
          <StudentScientificSocietySection/>
          <ConferencesSection />
          
        </main>
  
      </div>
    )
  }
  
