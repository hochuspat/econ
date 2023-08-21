// ScholarshipsSection.js
import React from 'react'
import styles from '@/styles/Stud.module.css';

export default function ScholarshipsSection() {
  return (
    <div className={styles.studentcouncilsection}>
      <h2>Стипендии и материальная помощь</h2>
      <p>Студенты экономического факультета могут получать различные виды стипендий и материальной помощи в зависимости от их успеваемости, социального положения, научной и общественной активности. Существуют следующие виды стипендий и материальной помощи:</p>
      <ul>
        <li>Государственная академическая стипендия - выплачивается всем студентам, успешно освоившим учебный план, в размере от 2500 до 5000 рублей в месяц.</li>
        <li>Государственная социальная стипендия - выплачивается студентам из малообеспеченных семей, инвалидам и другим категориям граждан, имеющим право на нее, в размере от 3000 до 6000 рублей в месяц.</li>
        <li>Повышенная стипендия ректора - выплачивается студентам, занимающим призовые места в олимпиадах, конкурсах и других научных и творческих мероприятиях, в размере от 10000 до 20000 рублей в месяц.</li>
        <li>Целевая стипендия - выплачивается студентам, обучающимся по целевому направлению подготовки кадров для определенной организации или предприятия, в размере от 5000 до 10000 рублей в месяц.</li>
        <li>Материальная помощь - предоставляется студентам, оказавшимся в трудной жизненной ситуации (болезнь, потеря кормильца, стихийное бедствие и т.д.), в размере от 5000 до 20000 рублей единовременно.</li>
      </ul>
      <p>Для получения стипендии или материальной помощи необходимо подать заявление и необходимые документы в профком студентов или деканат факультета.</p>
    </div>
  )
}