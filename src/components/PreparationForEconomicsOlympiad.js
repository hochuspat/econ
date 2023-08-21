import React, { useState, useEffect } from 'react';
import styles from '@/styles/SchoolStudentsSection.module.css';


const YoungEntrepreneursSchool = () => {
  const [textArray, settextArray] = useState({});




  useEffect(() => {
    async function fetchtextArray() {
      try {
        const response = await fetch('http://192.168.10.105:8000/textArray');
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
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{textArray.title}</h2>
        <p className={styles.description}>{textArray.description}</p>
        <button className={styles.button}>Записаться</button>
      </div>
      <div className={styles.cardImage}>
        <img src={textArray.imageUrl} alt={textArray.imageAlt} />
      </div>
    </div>
  );
};

export default YoungEntrepreneursSchool;
