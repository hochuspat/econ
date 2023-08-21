// Импортируем необходимые компоненты
import styles from '@/styles/DocumentsPage.module.css';
import Image from 'next/image';

// Создаем компонент раздела "СНО"
export default function StudentScientificSocietySection() {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>
          Студенческое научное общество
        </h2>
        <p className={styles.text}>
          Студенческое научное общество (СНО) - это объединение студентов, интересующихся наукой и желающих развивать свои научные навыки. СНО организует научные мероприятия, такие как конкурсы, олимпиады, секции, школы и летние стажировки.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/IIWV8jeAhXg.jpg" alt="Студенты на СНО" width={500} height={300} />
      </div>
    </div>
  );
}
