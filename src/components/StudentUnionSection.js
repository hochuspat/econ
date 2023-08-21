// StudentUnionSection.js
import React from 'react'
import styles from '@/styles/Stud.module.css';

export default function StudentUnionSection() {
  return (
    <div className={styles.studentcouncilsection}>
      <h2>Профком студентов</h2>
      <p>Профком студентов - это организация, которая представляет интересы студентов экономического факультета в области образования, науки, культуры, спорта и социальной защиты. Профком студентов участвует в формировании учебных планов, распределении стипендий, организации культурно-массовых и спортивных мероприятий, оказании материальной и юридической помощи студентам.</p>
      <ul>
        <li>Председатель профкома студентов: Смирнов Смирно Смирнович</li>
        <li>Заместитель председателя: Кузнецова Кузьма Кузьминна</li>
        <li>Секретарь: Попов Поп Попович</li>
        <li>Контактный телефон: +7 (495) 765-43-21</li>
        <li>Электронная почта: profcom@econ.msu.ru</li>
      </ul>
    </div>
  )
}