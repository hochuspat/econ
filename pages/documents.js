// pages/documents.js
import Head from 'next/head'
import Navigation from '@/components/Navigation';

import React, { useState } from 'react';
import styles from '@/styles/DocumentsPage.module.css'; 
const DropdownMenu = ({ title, documents }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderDocuments = () => {
    return documents.map((doc) => (
      <li key={doc.name}>
        <a href={doc.url} download>
          {doc.name}
        </a>
      </li>
    ));
  };

  return (
    <div className="dropdown-menu">
      <h3 onClick={toggleMenu}>{title}</h3>
      {isOpen && <ul>{renderDocuments()}</ul>}
    </div>
  );
};

const DocumentsPage = () => {
  const programs = [
    { name: 'Бакалавриат', url: '/documents/programs/bachelor.pdf' },
    { name: 'Магистратура', url: '/documents/programs/master.pdf' },
    { name: 'Докторантура', url: '/documents/programs/doctoral.pdf' },
  ];

  const regulations = [
    { name: 'Учебный регламент', url: '/documents/regulations/study.pdf' },
    { name: 'Правила приема', url: '/documents/regulations/admission.pdf' },
    { name: 'Академический кодекс', url: '/documents/regulations/code.pdf' },
  ];

  const forms = [
    { name: 'Заявление на академический отпуск', url: '/documents/forms/leave.pdf' },
    { name: 'Заявление на смену группы', url: '/documents/forms/group.pdf' },
    { name: 'Заявление на перерасчет баллов', url: '/documents/forms/recalculation.pdf' },
  ];

  const publications = [
    { name: 'Статья о влиянии цифровизации на экономику', url: '/documents/publications/digitalization.pdf' },
    { name: 'Статья о проблемах миграции и трудового рынка', url: '/documents/publications/migration.pdf' },
    { name: 'Статья о моделировании рисков и неопределенности', url: '/documents/publications/risk.pdf' },
  ];

  return (
    <div className={styles.container}>
            <Navigation />
    <Head>
      <title>Экономический факультет КубГУ</title>
      <meta name="description" content="Сайт вашего факультета" />
      <link rel="icon" href="/your-logo-image.svg" />
    </Head>

      <h1>Документы</h1>
      <p>Добро пожаловать в раздел "Документы" экономического факультета! Здесь вы найдете важные документы, регламенты и информацию, связанную с учебным процессом и жизнью факультета. Мы стремимся обеспечить максимальную прозрачность и легкий доступ к всей необходимой информации.</p>

      <div className={styles.section}>
        <h2>Учебные программы</h2>
        <p>В этом разделе вы сможете ознакомиться с актуальными учебными программами...</p>
        <DropdownMenu title="Список учебных программ" documents={programs} />
      </div>

      <div className={styles.section}>
        <h2>Регламенты и Правила</h2>
        <p>Чтобы учебный процесс был максимально организованным и понятным...</p>
        <DropdownMenu title="Список регламентов и правил" documents={regulations} />
      </div>

      <div className={styles.section}>
        <h2>Административные формы</h2>
        <p>В данном разделе вы сможете скачать различные административные формы...</p>
        <DropdownMenu title="Список административных форм" documents={forms} />
      </div>

      <div className={styles.section}>
        <h2>Научные публикации</h2>
        <p>Факультет активно поддерживает научные исследования своих студентов и преподавателей...</p>
        <DropdownMenu title="Список научных публикаций" documents={publications} />
      </div>

      <div className={styles.section}>
        <h2>Контакты</h2>
        <p>Если у вас возникли вопросы или нужна дополнительная информация по предоставленным документам...</p>
      </div>
     

    </div>
  );
};

export default DocumentsPage;