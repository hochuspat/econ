import React from 'react';
import PhotoGallery from '@/components/PhotoGallery';
import styles from '@/styles/Home.module.css';
import Navigation from '@/components/Navigation';
import Head from 'next/head';

const albums = [
  {
    title: 'лого',
    photos: [
      '/nM-0WPHZrpk.jpg',
      '/nM-0WPHZrpk.jpg',
      '/nM-0WPHZrpk.jpg',
      '/nM-0WPHZrpk.jpg',
      '/nM-0WPHZrpk.jpg',
      '/nM-0WPHZrpk.jpg',
      '/nM-0WPHZrpk.jpg',
      '/nM-0WPHZrpk.jpg',
      '/nM-0WPHZrpk.jpg',
      '/nM-0WPHZrpk.jpg',
    ],
  },
  {
    title: 'банеры',
    photos: [
      '/avet.jpg',
      '/avet.jpg',
      '/avet.jpg',
      '/avet.jpg',
      '/avet.jpg',
      '/avet.jpg',
      '/avet.jpg',
      '/avet.jpg',    ],
  },
];

const GalleryPage = () => {
    return (
      <div className={styles.container2}>
        <Navigation />
        <Head>
          <title>Экономический факультет КубГУ</title>
          <meta name="description" content="Сайт вашего факультета" />
          <link rel="icon" href="/your-logo-image.svg" />
        </Head>
        <h1 className={styles.whiteText}>Символика</h1>
        <PhotoGallery albums={albums} />
      </div>
    );
  };
  
  export default GalleryPage;
  
  
  
  
  
  