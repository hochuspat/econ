import React from 'react';
import styles from '@/styles/ImageTextStyles.module.css';
import Link from 'next/link'; 

const textArray = [
  "Кубанский государственный университет (КубГУ) в Краснодаре является ведущим вузом юга России, с известными достижениями в образовании и науке. Экономический факультет КубГУ - престижный образовательный центр, с преподавателями-экспертами и широкой программой обучения. Факультет активно сотрудничает с ведущими организациями, поддерживает международные связи и успешно готовит выпускников для карьеры в экономике, бизнесе и государственном управлении."
];
const advantagesArray = [
  "Высококвалифицированные преподаватели-эксперты с богатым опытом работы в экономике и бизнесе.",
  "Широкий спектр образовательных программ, позволяющих выбрать направление в соответствии с интересами студента.",
  "Современные учебные курсы и инновационные методы обучения, способствующие активному усвоению материала.",
];

const ImageTextComponent = () => {
    return (
      <div className={styles['image-text-container']}>
        <div className={styles.image}>
          <img src="/rectangle-24.png" alt="Image" />
        </div>
        <div className={styles.text}>
          <h2>О Факультете</h2>
          {textArray.map((text, index) => (
            <p key={index}>{text}</p>
          ))}


<Link href="/ofacke">
          <button className={styles.button}>
            Подробнее
            <span className={styles.arrow}>→</span>
          </button>
        </Link>


        </div>  
        <div className={styles.image}>
          <img src="/rectangle-34.png" alt="Another Image" />
        </div>
        <div className={styles.text}>
          <h2>Преимущества</h2>
          <ul>
            {advantagesArray.map((advantage, index) => (
              <li key={index}>{advantage}</li>
            ))}
          </ul>
        
        </div>
      
      </div>
    );
  };
  
  export default ImageTextComponent;