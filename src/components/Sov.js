import styles from '@/styles/Sov.module.css';

const StructureSection = () => {
  return (
    <div className={styles.centeredContainer}>
        <h2 className={styles.whiteText}>Ученый совет экономического факультета</h2>
      <div className={styles.cardContent}>
        <div className={styles.personInfo}>
          <div className={styles.personText}>
            <h2 className={styles.whiteText}>Шевченко Игорь Викторович</h2>
            <p className={styles.whiteText}>Ученая степень: Кандидат экономических наук</p>
            <p className={styles.whiteText}>Ученое звание: Профессор</p>
            <p className={styles.whiteText}>Должность: Председатель Совета</p>
          </div>
          <img
            src="/head-of-department.jpg"
            alt="Заведующий кафедрой"
            className={styles.facultyImage}
          />
        </div>
        
        <div className={styles.personInfo}>
          <div className={styles.personText}>
            <h3 className={styles.whiteText}>Литвинский Кирилл Олегович</h3>
            <p className={styles.whiteText}>Ученая степень: Кандидат экономических наук</p>
            <p className={styles.whiteText}>Ученое звание: Доцент</p>
            <p className={styles.whiteText}>Должность: Заместитель декана по учебной работе</p>
          </div>
          <img
            src="/head-of-department.jpg"
            alt="Заведующий кафедрой"
            className={styles.facultyImage}
          />
        </div>
        
        <div className={styles.personInfo}>
          <div className={styles.personText}>
            <h3 className={styles.whiteText}>Брацлавская Екатерина Яковлевна</h3>
            <p className={styles.whiteText}>Ученая степень: Кандидат экономических наук</p>
            <p className={styles.whiteText}>Ученое звание: Доцент</p>
            <p className={styles.whiteText}>Должность: Заместитель декана по отделению заочного и дистанционного обучения</p>
          </div>
          <img
            src="/head-of-department.jpg"
            alt="Заведующий кафедрой"
            className={styles.facultyImage}
          />
        </div>
      </div>
    </div>
  );
};

export default StructureSection;
