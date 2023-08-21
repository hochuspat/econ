import styles from '@/styles/Pervak.module.css';
import React, { useState, useEffect } from 'react';


import Schedule from '@/components/Schedule'
import StudyStructureBak from '@/components/StudyStructureBak'

export default function BachelorSection() {
  const [Baki, setBaki] = useState({});


  useEffect(() => {
    async function fetchBaki() {
      try {
        const response = await fetch('http://192.168.10.105:8000/Baki');
        if (response.ok) {
          const data = await response.json();
          setBaki(data);
        } else {
          console.error('Error fetching school data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching school data:', error);
      }
    }
    fetchBaki();
  }, []);
    return (
      <div className={styles.container}>
        <h2  style={{ textAlign: 'center' }}>Бакалавриат</h2>
        <h3  style={{ textAlign: 'center' }}>{Baki.title}</h3>
        <img src={Baki.imageUrl} alt="Фото студентов" className={styles.facultyImage3} />
              <StudyStructureBak/>
              <Schedule />
  
      </div>
    )
  }