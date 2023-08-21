import React, { useState, useEffect } from 'react';
import styles from '@/styles/MarketingPage.module.css';
import Navigation from '@/components/Navigation';
import Head from 'next/head';
import Footer from '@/components/Footer';

const MarketingPage = () => {
  const [departmentName, setDepartmentName] = useState('marketing');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [facultyMembers, setFacultyMembers] = useState([]);
  const [studentEvents, setStudentEvents] = useState([]);
  const [aboutDepartmentText, setAboutDepartmentText] = useState([]);
  const [facultyHeadText, setFacultyHeadText] = useState([]);
  const [teachersText, setTeachersText] = useState([]);
  const [educationalProcessText, setEducationalProcessText] = useState([]);
  const [scientificActivitiesText, setScientificActivitiesText] = useState([]);
  const [contactsText, setContactsText] = useState([]);

  const openEventModal = (index) => {
    setSelectedEvent(studentEvents[index]);
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
  };

  useEffect(() => {
    const fetchDepartmentData = async (department) => {
      const facultyMembersResponse = await fetch(`http://192.168.10.105:8000/facultyMembers/${department}`);
      const facultyMembersData = await facultyMembersResponse.json();
      setFacultyMembers(facultyMembersData);

      const studentEventsResponse = await fetch(`http://192.168.10.105:8000/studentEvents/${department}`);
      const studentEventsData = await studentEventsResponse.json();
      setStudentEvents(studentEventsData);

      const aboutDepartmentResponse = await fetch(`http://192.168.10.105:8000/aboutDepartmentText/${department}`);
      const aboutDepartmentData = await aboutDepartmentResponse.json();
      setAboutDepartmentText(aboutDepartmentData);

      const facultyHeadResponse = await fetch(`http://192.168.10.105:8000/facultyHeadText/${department}`);
      const facultyHeadData = await facultyHeadResponse.json();
      setFacultyHeadText(facultyHeadData);

      const teachersResponse = await fetch(`http://192.168.10.105:8000/teachersText/${department}`);
      const teachersData = await teachersResponse.json();
      setTeachersText(teachersData);

      const educationalProcessResponse = await fetch(`http://192.168.10.105:8000/educationalProcessText/${department}`);
      const educationalProcessData = await educationalProcessResponse.json();
      setEducationalProcessText(educationalProcessData);

      const scientificActivitiesResponse = await fetch(`http://192.168.10.105:8000/scientificActivitiesText/${department}`);
      const scientificActivitiesData = await scientificActivitiesResponse.json();
      setScientificActivitiesText(scientificActivitiesData);

      const contactsResponse = await fetch(`http://192.168.10.105:8000/contactsText/${department}`);
      const contactsData = await contactsResponse.json();
      setContactsText(contactsData);
    };

    fetchDepartmentData(departmentName);
  }, [departmentName]);
  
  return (
    <div className={styles.container}>
    <Navigation />
    <Head>
      <title>Экономический факультет КубГУ</title>
      <meta name="description" content="Сайт вашего факультета" />
      <link rel="icon" href="/your-logo-image.svg" />
    </Head>
    <h1 className={styles.whiteText}>Кафедра бухгалтерского учета, аудита и автоматизированной обработки данных</h1>
{aboutDepartmentText.map((paragraph, index) => (
  <p key={index} className={styles.whiteText}>
    {paragraph}
  </p>
))}
<div className={styles.facultyMember}>
  <h2 className={styles.centerText}>Заведующий кафедры</h2>
  <div className={styles.flexContainer}>
    {facultyHeadText.map((item, index) => (
      <div key={index} className={styles.facultyItem}>
        <img
          src={item.imagePath}
          alt="Заведующий кафедрой"
          className={styles.facultyImage}
        />
        <p className={styles.whiteText}>
          {item.text}
        </p>
      </div>
    ))}
  </div>
</div>



<h2 className={styles.whiteText}>Преподаватели кафедры</h2>
{teachersText.map((paragraph, index) => (
  <p key={index} className={styles.whiteText}>
    {paragraph}
  </p>
))}    
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
{educationalProcessText.map((paragraph, index) => (
  <p key={index} className={styles.whiteText}>
    {paragraph}
  </p>
))}    
<h2 className={styles.whiteText}>Научная деятельность</h2>
<p className={styles.whiteText}>
  {scientificActivitiesText}
</p>
<h2 className={styles.whiteText}>Контакты</h2>
{Object.values(contactsText).map((paragraph, index) => (
  <p key={index} className={styles.whiteText}>
    {paragraph}
  </p>
))}
 
      </div>
  );
};

export default MarketingPage;