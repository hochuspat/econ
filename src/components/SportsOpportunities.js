import React from 'react';
import styles from '@/styles/Pervak.module.css';

export default function SportsOpportunities() {
  return (
    <div>
      <h3 className={styles.centeredHeading}>Возможности для занятий спортом</h3>
      <p>На факультете и в университете есть много возможностей для занятий спортом и физической культурой. Вы можете посещать спортивные секции, участвовать в соревнованиях и олимпиадах, а также пользоваться спортивными базами и залами.</p>
      <p>Для того, чтобы узнать подробнее о спортивных возможностях, вы можете открыть PDF файл:</p>
      <iframe
        src="/Sec.pdf"
        width="1350"
        height="700"
        title="Расписание спортивных секций"
        className={styles.centeredImage}
      ></iframe>
    </div>
  );
}
