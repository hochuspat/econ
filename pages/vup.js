// AlumniScreen.js
import React from 'react'
import Image from 'next/image'
import styles from '@/styles/AlumniScreen.module.css'
import Head from 'next/head'
import Navigation from '@/components/Navigation';

// Данные о выпускниках (можно получать из базы данных или API)
const alumni = [
  {
    name: 'Иван Иванов',
    photo: '/Alenikov.jpg', // URL фотографии
    year: 2020, // Год выпуска
    degree: 'Бакалавр', // Степень
    program: 'Экономика', // Программа обучения
    position: 'Аналитик в Сбербанке', // Текущая должность
    email: 'ivanov@sb.ru', // Электронная почта
    linkedin: 'https://www.linkedin.com/in/ivanov' // Профиль LinkedIn
  },
  {
    name: 'Мария Петрова',
    photo: '/petrova.jpg',
    year: 2019,
    degree: 'Магистр',
    program: 'Финансовая аналитика',
    position: 'Консультант в McKinsey',
    email: 'petrova@mck.com',
    linkedin: 'https://www.linkedin.com/in/petrova'
  },
  {
    name: 'Алексей Сидоров',
    photo: '/sidorov.jpg',
    year: 2018,
    degree: 'Аспирант',
    program: 'Экономическая теория',
    position: 'Профессор в HSE',
    email: 'sidorov@hse.ru',
    linkedin: 'https://www.linkedin.com/in/sidorov'
  }
]

// Компонент для отображения карточки выпускника
const AlumniCard = ({ alumni }) => {
  return (
    <div className={styles.card}>
        
      <Image src={alumni.photo} alt={alumni.name} width={200} height={200} />
      <h3>{alumni.name}</h3>
      <p>{alumni.degree}, {alumni.program}, {alumni.year}</p>
      <p>{alumni.position}</p>
      <p><a href={`mailto:${alumni.email}`}>{alumni.email}</a></p>
      <p><a href={alumni.linkedin}>LinkedIn</a></p>
    </div>
  )
}

// Компонент для отображения списка выпускников
const AlumniList = ({ alumni }) => {
  return (
    <div className={styles.list}>
      {alumni.map((item, index) => (
        <AlumniCard key={index} alumni={item} />
      ))}
    </div>
  )
}

// Основной компонент для экрана "Выпускники"
const AlumniScreen = () => {
  return (
    <div className={styles.container}>
                    <Navigation />
    <Head>
      <title>Экономический факультет КубГУ</title>
      <meta name="description" content="Сайт вашего факультета" />
      <link rel="icon" href="/your-logo-image.svg" />
    </Head>

      <h1>Выпускники экономического факультета</h1>
      <AlumniList alumni={alumni} />
    </div>
  )
}

export default AlumniScreen
