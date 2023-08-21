// Создаем компонент BachelorSection, который будет содержать раздел "Бакалавриат"
import styles from '@/styles/Pervak.module.css';


import Schedule from '@/components/Schedule'
import StudyStructureMag from '@/components/StudyStructureMag'

export default function BachelorSection() {
    return (
      <div className={styles.container}>
        <h2  style={{ textAlign: 'center' }}>Магистратура</h2>
        <h3  style={{ textAlign: 'center' }}>Здесь вы можете найти информацию о магисторских программах нашего университета.</h3>
        <img src="/istor.jpg" alt="Фото студентов" className={styles.facultyImage3} />
              <StudyStructureMag/>
              <Schedule />
  
      </div>
    )
  }