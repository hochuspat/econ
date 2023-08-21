import React from 'react'
import Link from 'next/link'
import styles from '@/styles/InternshipsSection.module.css'
import Head from 'next/head'
import Navigation from '@/components/Navigation';

// Компонент для отображения информации о практике, стажировке или трудоустройстве
function InternshipCard({ title, description, image, link }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Link href={link}>
          <div className={styles.button}>Подробнее</div>
        </Link>
      </div>
    </div>
  )
}

// Компонент для отображения списка практик, стажировок и трудоустройств
function InternshipsSection() {
  // Массив с данными о практиках, стажировках и трудоустройствах
  const internships = [
    {
      title: 'Практика в Сбербанке',
      description: 'Сбербанк предлагает студентам экономического факультета пройти практику в различных подразделениях банка и получить ценный опыт работы.',
      image: '/avet.jpg',
      link: '/internships/sberbank',
    },
    {
      title: 'Стажировка в Яндексе',
      description: 'Яндекс приглашает студентов экономического факультета на стажировку в отделе аналитики и исследований. Вы сможете работать над интересными проектами и изучать новые технологии.',
      image: '/avet.jpg',
      link: '/internships/yandex',
    },
    {
      title: 'Трудоустройство в Газпроме',
      description: 'Газпром ищет молодых специалистов по экономике и управлению для работы в крупнейшей газовой компании России. Вы получите высокую зарплату и перспективы карьерного роста.',
      image: '/avet.jpg',
      link: '/internships/gazprom',
    },
  ]

  return (
    <section className={styles.section}>
    <Navigation />
    <Head>
      <title>Экономический факультет КубГУ</title>
      <meta name="description" content="Сайт вашего факультета" />
      <link rel="icon" href="/your-logo-image.svg" />
    </Head>
      <h2 className={styles.heading}>Практики, стажировки, трудоустройство</h2>
      <p className={styles.intro}>Экономический факультет сотрудничает с ведущими компаниями России и мира, предоставляя студентам возможности для профессионального развития и карьеры.</p>
      <div className={styles.grid}>
        {internships.map((internship) => (
          <InternshipCard key={internship.title} {...internship} />
        ))}
      </div>
    </section>
  )
}

export default InternshipsSection



