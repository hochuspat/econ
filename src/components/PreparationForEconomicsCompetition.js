import React, { useState, useEffect } from 'react';
import styles from '@/styles/SchoolStudentsSection.module.css';

const YoungEntrepreneursSchool = () => {
  const [schoolData, setSchoolData] = useState({});

  useEffect(() => {
    async function fetchSchoolData() {
      try {
        const response = await fetch('http://192.168.10.105:8000/school_data');
        if (response.ok) {
          const data = await response.json();
          setSchoolData(data);
        } else {
          console.error('Error fetching school data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching school data:', error);
      }
    }
    fetchSchoolData();
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{schoolData.title}</h2>
        <p className={styles.description}>{schoolData.description}</p>
        <button className={styles.button}>Записаться</button>
      </div>
      <div className={styles.cardImage}>
        <img src={schoolData.imageUrl} alt={schoolData.imageAlt} />
      </div>
    </div>
  );
};

export default YoungEntrepreneursSchool;
