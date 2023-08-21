// Импортируем необходимые компоненты
import { useState } from 'react';
import styles from '@/styles/ConferencesSection.module.css';
// Создаем массив с данными о победителях конференций
const winners = [
  {
    year: 2020,
    name: 'Иванов Иван Иванович',
    topic: 'Цифровизация экономики и ее влияние на социальное развитие',
    photo: '/rectangle-5.png'
  },
  {
    year: 2019,
    name: 'Петров Петр Петрович',
    topic: 'Экономические отношения в условиях цифровой трансформации',
    photo: '/petrov.jpg'
  },
  {
    year: 2018,
    name: 'Сидоров Сидор Сидорович',
    topic: 'Моделирование экономических процессов с использованием искусственного интеллекта',
    photo: '/sidorov.jpg'
  },
  {
    year: 2017,
    name: 'Смирнова Смирна Смирновна',
    topic: 'Анализ влияния глобализации на экономическую безопасность России',
    photo: '/smirnova.jpg'
  },
  {
    year: 2016,
    name: 'Кузнецов Кузьма Кузьмич',
    topic: 'Роль научных школ в развитии экономической науки',
    photo: '/kuznetsov.jpg'
  }
];
// Создаем компонент раздела "Научные конференции"
function ConferencesSection() {
    // Создаем состояние для открытых годов
    const [expandedYears, setExpandedYears] = useState([]);
  
    // Функция для обработки нажатия на год
    const toggleYear = (year) => {
      if (expandedYears.includes(year)) {
        setExpandedYears(expandedYears.filter(item => item !== year));
      } else {
        setExpandedYears([...expandedYears, year]);
      }
    };
  
    return (
      <div className={styles.section}>
        <h2 className={styles.subtitle}>
          Научные конференции
        </h2>
        <p className={styles.text}>
          Экономический факультет регулярно проводит научные конференции, семинары и круглые столы по актуальным вопросам экономики. В них принимают участие известные ученые, преподаватели, аспиранты и студенты из разных стран и регионов.
        </p>
        {/* Выводим список победителей для каждого года */}
        {winners.map(winner => (
          <div key={winner.year}>
            <h3 className={styles.year} onClick={() => toggleYear(winner.year)}>
              {winner.year}
            </h3>
            {expandedYears.includes(winner.year) && (
              <div className={styles.winnerInfo}>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.image}
                    src={winner.photo}
                    alt={`Победитель конференции ${winner.year} года`}
                  />
                  <div className={styles.caption}>
                    <h3>{winner.name}</h3>
                    <p>{winner.topic}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  
  export default ConferencesSection;