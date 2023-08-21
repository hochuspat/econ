import React, { useState, useEffect } from 'react';

const PreparationForAdmission = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch('http://192.168.10.105:8000/tips_data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при получении данных');
        }
        return response.json();
      })
      .then(data => {
        setTips(data.tips); 
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

  return (
    <div>
      <h3>Подготовка к поступлению</h3>
      <p>Подготовка к поступлению на бакалавриат и специалитет - важный этап вашей учебной карьеры. Вот несколько советов, которые могут помочь вам успешно справиться с этим процессом:</p>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default PreparationForAdmission;

