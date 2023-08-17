import styles from '@/styles/Home.module.css';
import Link from 'next/link'; 

const StructureSection = () => {


  return (
    <div >
      <h2 className={styles.whiteText}>Структура</h2>
        <div className={styles.cardContent}>
          <p className={styles.whiteText}>
            Декан экономического факультета — Шевченко Игорь Викторович,
            Почетный работник высшего профессионального образования (2001 г.),
            Заслуженный экономист РФ (2005 г.),
            Лауреат премии правительства РФ в области науки и техники (2007 г.),
            доктор экономических наук, профессор.
          </p>
          <p className={styles.whiteText}>
            Более подробная информация размещена в разделе
            "Руководство экономического факультета"
          </p>
          <p className={styles.whiteText}>Состав ученого совета экономического факультета.</p>
          <h3 className={styles.whiteText}>Кафедры</h3>
          <div className={styles.buttonContainer}>
            <Link href="/buhgalter">
              <button className={styles.button}>Кафедра бухгалтерского учета, аудита и автоматизированной обработки данных</button>
            </Link>
            <Link href="/marketing">
              <button className={styles.button}>Кафедра маркетинга и торгового дела</button>
            </Link>
            <Link href="/mir-econ">
              <button className={styles.button}>Кафедра мировой экономики и менеджмента</button>
            </Link>
            <Link href="/econ-pred">
              <button className={styles.button}>Кафедра экономики предприятия, регионального и кадрового менеджмента</button>
            </Link>
            <Link href="/teor-econ">
              <button className={styles.button}>Кафедра теоретической экономики</button>
            </Link>
            <Link href="/econ-innov">
              <button className={styles.button}>Кафедра экономики и управления инновационными системами</button>
            </Link>
            <Link href="/econ-analiz">
              <button className={styles.button}>Кафедра экономического анализа, статистики и финансов</button>
            </Link>
          </div>          
        <h3 className={styles.whiteText}>Подразделения</h3>
          <p className={styles.whiteText}>Учебно-научный центр информационных технологий</p>
        </div>
     
    </div>
  );
};

export default StructureSection;



