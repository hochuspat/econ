import React from 'react';
import styles from '@/styles/Home.module.css';
import Navigation from '@/components/Navigation';
import Head from 'next/head';
import Footer from '@/components/Footer';
const socialLinks = [
  {
    text: "Канал в Телеграмме",
    image: "/your-logo-image.svg", 
    link: "https://t.me/econom_kubsu",
  },
  {
    text: "Группа в ВК",
    image: "/your-logo-image.svg", 
    link: "https://t.me/econom_kubsu",
  },
  {
    text: "Канал для абитуриентов",
    image: "/your-logo-image.svg", 
    link: "https://t.me/econom_kubsu",
  },
];

const Fack = () => {
  return (
    <div className={styles.container2}>
      <Navigation />
      <Head>
        <title>Экономический факультет КубГУ</title>
        <meta name="description" content="Сайт вашего факультета" />
        <link rel="icon" href="/your-logo-image.svg" />
      </Head>
      <div className={styles.centeredContainer}>
        <div className={styles.cardContent}>
          <div className={styles.contentContainer}>
            <div className={styles.personInfo}>
              <div className={styles.socialLinksContainer}>
                {socialLinks.map((linkData, index) => (
                  <div key={index} className={styles.socialLink}>
                    <img
                      src={linkData.image}
                      alt={`${linkData.text} иконка`}
                      className={styles.facultyImage}
                      onClick={() => window.open(linkData.link, "_blank")}
                    />
                    <p className={styles.whiteText}>{linkData.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.mainText}>
              <h2 className={styles.whiteText}>Контактная информация</h2>            
              <p className={styles.whiteText}>Экономический факультет</p>
            <p className={styles.whiteText}>Россия, 350040, г.Краснодар, улица Ставропольская, 149</p>
            <p className={styles.whiteText}>телефон/факс: (861) 219-95-53</p>
            <p className={styles.whiteText}>e-mail: decan@econ.kubsu.ru</p>

            <h2 className={styles.whiteText}>Телефоны</h2>
            <p className={styles.whiteText}>Деканат экономического факультета: +7 (861) 219-95-54</p>
            <p className={styles.whiteText}>Кафедра бухгалтерского учета, аудита и автоматизированной обработки данных:</p>
            <p className={styles.whiteText}>+7 (861) 219-95-01, добавочный 201. Каб. 211-н</p>
            <p className={styles.whiteText}>Кафедра маркетинга и торгового дела:</p>
            <p className={styles.whiteText}>+7 (861) 219-95-01, добавочный 208. Каб. 204-а</p>
            <p className={styles.whiteText}>Кафедра мировой экономики и менеджмента:</p>
            <p className={styles.whiteText}>+7 (861) 219-95-01, добавочный 202. Каб. 236</p>
            <p className={styles.whiteText}>Кафедра теоретической экономики:</p>
            <p className={styles.whiteText}>+7 (861) 219-95-01, добавочный 205. Каб. 230</p>
            <p className={styles.whiteText}>Кафедра экономики и управления инновационными системами:</p>
            <p className={styles.whiteText}>+7 (861) 219-95-01, добавочный 207. Каб. 205-н</p>
            <p className={styles.whiteText}>Кафедра экономики предприятия, регионального и кадрового менеджмента:</p>
            <p className={styles.whiteText}>+7 (861) 219-95-02, добавочный 203</p>
            <p className={styles.whiteText}>Кафедра экономического анализа, статистики и финансов:</p>
            <p className={styles.whiteText}>+7 (861) 219-95-01, добавочный 206. Каб. 223</p>
          </div>
        </div>
      </div>
  
    </div>  
        <Footer />
      </div>

  );
};

export default Fack;
