import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Navigation from '@/components/Navigation';
import NewsSection from '@/components/NewsSection'; 
import ImageTextComponent from '@/components/ImageTextComponent'; 
import Footer from '@/components/Footer'; 

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Экономический факультет КубГУ</title>
        <meta name="description" content="Сайт вашего факультета" />
        <link rel="icon" href="/your-logo-image.svg" />
      </Head>

      <Navigation />
      <main className={styles.main}>
        <NewsSection /> 
      </main>
      <ImageTextComponent />
        <Footer/>
    </div>
  );
}
