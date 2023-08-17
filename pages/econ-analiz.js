import React, { useState } from 'react';
import styles from '@/styles/MarketingPage.module.css';
import Navigation from '@/components/Navigation';
import Head from 'next/head';
import Footer from '@/components/Footer';
const facultyMembers = [
  {
    name: 'Аветисян Наталья Николаевна',
    photo: '/avet.jpg',
    portfolioLink: 'https://www.kubsu.ru/ru/public-portfolio/11934',
  },
  {
    name: 'Имя Фамилия 2',
    photo: '/Alenikov.jpg',
    portfolioLink: 'https://www.kubsu.ru/ru/public-portfolio/9109',
  },
];

const studentEvents = [
  {
    image: '/avet.jpg',
    text: 'Описание первого мероприятия...',
  },
  {
    image: '/event2.jpg',
    text: 'Описание второго мероприятия...',
  },
];

const MarketingPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openEventModal = (index) => {
    setSelectedEvent(studentEvents[index]);
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
  };
  return (
    <div className={styles.container}>
    <Navigation />
    <Head>
      <title>Экономический факультет КубГУ</title>
      <meta name="description" content="Сайт вашего факультета" />
      <link rel="icon" href="/your-logo-image.svg" />
    </Head>
      <h1 className={styles.whiteText}>Кафедра экономического анализа, статистики и финансов</h1>
      <p className={styles.whiteText}>
        Кафедра маркетинга и торгового дела была создана в 1998 году на базе
        кафедры экономики и организации торговли. Кафедра осуществляет подготовку
        специалистов по направлениям "Маркетинг" и "Торговое дело", а также
        проводит научные исследования в области маркетинговых коммуникаций,
        потребительского поведения, брендинга, ритейлинга, логистики и других
        современных аспектов маркетинга и торговли.
      </p>
      <div className={styles.facultyMember}>
  <h2 className={styles.centerText}>Заведующий кафедры</h2>
  <div className={styles.flexContainer}>
    <p className={styles.whiteText}>
      Заведующий кафедрой маркетинга и торгового дела — Смирнов Алексей
      Александрович, доктор экономических наук, профессор, заслуженный деятель
      науки РФ, лауреат премии имени П.П. Семенова-Тян-Шанского за выдающиеся
      достижения в области экономической науки. Автор более 300 научных работ,
      в том числе 15 монографий и 20 учебников по маркетингу и торговому делу.
    </p>
    <img
      src="/head-of-department.jpg"
      alt="Заведующий кафедрой"
      className={styles.facultyImage}
    />
  </div>
</div>

      <h2 className={styles.whiteText}>Преподаватели кафедры</h2>
      <p className={styles.whiteText}>
        На кафедре работает высококвалифицированный преподавательский состав,
        состоящий из 25 человек, в том числе 5 докторов наук, 12 кандидатов наук,
        6 доцентов, 4 старших преподавателей и 3 ассистента. Преподаватели
        кафедры активно участвуют в научных конференциях, семинарах, грантовых
        проектах, а также сотрудничают с ведущими российскими и зарубежными
        университетами и компаниями в области маркетинга и торговли.
      </p>
      <div className={styles.facultyMembers}>
      {facultyMembers.map((facultyMember, index) => (
  <div key={index} className={styles.facultyMember}>
    <img src={facultyMember.photo} alt={facultyMember.name} className={styles.facultyImagePrep} />
    <div className={styles.facultyInfo}>
      <p className={`${styles.whiteText} ${styles.centeredName}`}>
        {facultyMember.name}
      </p>
      <p className={styles.portfolioLink}>
        <a href={facultyMember.portfolioLink}>
          Портфолио
        </a>
      </p>
    </div>
  </div>
))}
</div>
    
      <div className={styles.studentEvents}>
        <h2 className={styles.whiteText}>Мероприятия с участием студентов</h2>
        <div className={styles.eventContainer}>
          {studentEvents.map((event, index) => (
            <div
              key={index}
              className={styles.event}
              onClick={() => openEventModal(index)}
            >
              <img
                src={event.image}
                alt={`Мероприятие ${index + 1}`}
                className={styles.eventImage}
              />
              <p className={styles.eventText}>{event.text}</p>
            </div>
          ))}
        </div>
      </div>

    {selectedEvent && (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.closeModal} onClick={closeEventModal}>
            &times;
          </span>
          <img
            src={selectedEvent.image}
            alt="Мероприятие"
            className={styles.modalImage}
          />
          <p className={styles.modalText}>{selectedEvent.text}</p>
        </div>
      </div>
    )}
      <h2 className={styles.whiteText}>Учебный процесс</h2>
      <p className={styles.whiteText}>
        Кафедра маркетинга и торгового дела предлагает студентам современную и
        практико-ориентированную программу обучения, которая включает в себя
        изучение основных дисциплин по маркетингу и торговому делу, а также
        специализированных курсов по выбору студентов. Кроме того, студенты
        имеют возможность пройти практику в крупных российских и зарубежных
        компаниях, участвовать в студенческих конкурсах и олимпиадах по
        маркетингу и торговому делу, а также получить дополнительные сертификаты
        и квалификации по международным стандартам.
      </p>
      <h2 className={styles.whiteText}>Научная деятельность</h2>
      <p className={styles.whiteText}>
        Кафедра маркетинга и торгового дела является одним из ведущих научных
        центров по изучению современных проблем маркетинга и торговли в России и
        за рубежом. Кафедра реализукет несолько научных проектов, финансируемых
        различными грантами и фондами, а также издает научный журнал "Вестник
        маркетинга и торгового дела", входящий в перечень ВАК. Кафедра также
        организует и проводит международные и всероссийские научные конференции,
        симпозиумы, круглые столы по актуальным вопросам маркетинга и торговли.
      </p>
      <h2 className={styles.whiteText}>Контакты</h2>
      <p className={styles.whiteText}>
        Адрес кафедры: 119991, г. Москва, ул. Ленинские горы, д. 1, стр. 46,
        ауд. 321.
      </p>
      <p className={styles.whiteText}>Телефон: +7 (495) 939-28-83</p>
      <p className={styles.whiteText}>E-mail: marketing@econ.msu.ru</p>
      <Footer/>

    </div>
  );
};

export default MarketingPage;