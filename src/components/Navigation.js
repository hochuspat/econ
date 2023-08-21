import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Navigation.module.css';
import Link from 'next/link';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [educationMenuOpen, setEducationMenuOpen] = useState(false);
  const [abiturientMenuOpen, setAbiturientMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleEducationMenu = () => {
    if (!educationMenuOpen) {
      setEducationMenuOpen(true);
      setAbiturientMenuOpen(false);
    }
  };

  const toggleAbiturientMenu = () => {
    if (!abiturientMenuOpen) {
      setAbiturientMenuOpen(true);
      setEducationMenuOpen(false);
    }
  };

  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (educationMenuOpen && !e.target.closest(`.${styles.educationMenuItem}`)) {
        setEducationMenuOpen(false);
      }
    };
    
    document.addEventListener('click', closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener('click', closeMenuOnOutsideClick);
    };
  }, [educationMenuOpen]);

  return (
    <nav className={`${styles.navbar} ${menuOpen ? styles.menuOpen : ''}`}>
      <div className={`${styles.mobileMenuButton} ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className={`${styles.menuBars}`}>
          <div className={`${styles.menuBar} ${styles.bar1}`}></div>
          <div className={`${styles.menuBar} ${styles.bar2}`}></div>
          <div className={`${styles.menuBar} ${styles.bar3}`}></div>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <a href="/" id="logo-link">
          <Image src="/your-logo-image.svg" alt="Логотип" width={80} height={80} />
        </a>
        <div className={styles.title}>Экономический факультет КубГУ</div>
      </div>
      <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
        <li><a href="/ofacke">О факультете</a></li>
        <li className={`${styles.menuItem} ${educationMenuOpen ? styles.active : ''}`}>
          <a href="#" onMouseEnter={toggleEducationMenu} onMouseLeave={toggleEducationMenu}>
            Образование
          </a>
          {educationMenuOpen && (
            <ul className={`${styles.subMenu} ${styles.educationSubMenu}`}>
              <li><a href="/freshmen-section">Первокурсникам</a></li>
              <li><a href="/back">Бакалавриат</a></li>
              <li><a href="/spesh">Специалитет</a></li>
              <li><a href="/mag">Магистратура</a></li>
              <li><a href="/stash">Практики, стажировки, трудоустройство</a></li>
              <li><a href="/documents">Документы</a></li>
            </ul>
          )}
        </li>
        <li><a href="/inn">Наука и инновации</a></li>
        <li><a href="/stud">Студенческая жизнь</a></li>
        <li><a href="/vup">Выпускники</a></li>
        <li className={`${styles.menuItem} ${abiturientMenuOpen ? styles.active : ''}`}>
          <a href="#" onMouseEnter={toggleAbiturientMenu} onMouseLeave={toggleAbiturientMenu}>
            Абитуриентам
          </a>
          {abiturientMenuOpen && (
            <ul className={`${styles.subMenu} ${styles.educationSubMenu}`}>
              <li><a href="/abitur">Школьникам</a></li>
              <li><a href="/backspesh">Бакалавриат + специалитет</a></li>
              <li><a href="/maga">Магистратура</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
