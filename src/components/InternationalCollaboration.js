import React, { useState, useEffect } from 'react';
import styles from '@/styles/InternationalCollaboration.module.css';

const InternationalCollaboration = () => {
  const [internationalPartners, setInternationalPartners] = useState([]);

  useEffect(() => {
    fetch('http://192.168.10.105:8000/internationalPartners') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при получении данных');
        }
        return response.json();
      })
      .then(data => {
        setInternationalPartners(data.internationalPartners); 
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

  return (
    <div>
      <h3>Международное сотрудничество</h3>
      <div className={styles.partnercards}>
        {internationalPartners.map((partner, index) => (
          <div key={index} className={styles.partnercard}>
            <img src={partner.imageUrl} alt={partner.name} />
            <h4>{partner.name}</h4>
            <p>{partner.description}</p>
            <a href={partner.websiteUrl} target="_blank" rel="noopener noreferrer">
              Перейти на сайт
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternationalCollaboration;

