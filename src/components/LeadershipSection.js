import styles from '@/styles/Home1.module.css';

const StructureSection = () => {
  return (
    <div className={styles.centeredContainer}>
    <div>
      <h2 className={styles.whiteText}>Руководство факультета</h2>
     
        <div className={styles.cardContent}>
          <h2 className={styles.whiteText}>Декан Экономического факультета КубГУ</h2>
          <h3 className={styles.whiteText}>Шевченко Игорь Викторович</h3>
          <img
      src="/636e0eb6d6370363432433_360.jpg"
      alt="Заведующий кафедрой"
      className={styles.facultyImage}
    />
          <p className={styles.whiteText}>
          С отличием окончил экономический факультет Кубанского государственного 
          университета в 1983 г. и по настоящее время работает в нем: сначала в качестве
           инженера НИС (1983 г.), младшего научного сотрудника НИС (1984 г.), преподавателя 
           кафедры политэкономии (1985 г.), доцента (1988), профессора кафедры ОПП (1993 г.). 
           В 1995 г. был избран на должность заведующего кафедрой мировой экономики и менеджмента 
           и, впоследствии, деканом экономического факультета. В 1986 г. он защитил кандидатскую 
           диссертацию, в 1992 – докторскую в Санкт-Петербургском университете экономики и финансов. </p>
          <p className={styles.whiteText}>За годы работы в вузе им опубликовано более 500 научных работ,
           включая 17 монографий и учебно-методических пособия, 220 статей в центральных реферируемых журналах, а также 6 в зарубежных изданиях.</p>
            <p className={styles.whiteText}> Шевченко И.В. активно ведет работу по созданию научной шко
            лы. Под его руководством более 80 аспирантов и соискателей защитили кандидатские диссертаци
            и, 16 – докторские. Кроме этого, им оказано научно-организационное содействие в подготовке российских ученых по международной программе МВА и МS (магистров).</p>
            
            <p className={styles.whiteText}>Награжден нагрудным знаком «Почетный работник высшего образования». 
            Присвоено звание «Заслуженный экономист Российской Федерации». Присуждена премия Правительства РФ в 
            области науки и техники за создание информационно-аналитического комплекса мониторинга электронных сообщений в глобальных телекоммуникационных сетях.
         </p>
         
          <h2 className={styles.whiteText}>Заместитель декана по учебной работе</h2>
          <h3 className={styles.whiteText}>Литвинский Кирилл Олегович</h3>
          <img
      src="/head-of-department.jpg"
      alt="Заведующий кафедрой"
      className={styles.facultyImage}
    />
<p className={styles.whiteText}>
  Кандидат экономических наук, доцент. С отличием окончил Кубанский государственный университет, 
  по специальности «Экономика и социология труда» в 1998 году и по настоящее время работает в нем: 
  сначала в качестве преподавателя кафедры мировой экономики и менеджмента. В 2014 г. был избран на 
  должность заведующего кафедрой экономики и управления инновационными системами.</p> 
<p className={styles.whiteText}>Обучался в Академия народного хозяйства при Правительстве Российской 
Федерации по программе «Master of Business Administration» (MBA) в сфере «Региональный и муниципальный 
менеджмент». С 2010 г. по н.в. работает бизнес-тренером программы MBA в Высшей школе международного бизнеса 
по блоку дисциплин «Менеджмент». С 2013 г. эксперт губернаторского конкурса молодежных инновационных проектов 
«Премия IQ года». Заместитель председателя Регионального этапа всероссийской олимпиады школьников по экономике. 
Член оргкомитета Международной научно-практической конференции экономического факультета КубГУ. Член жюри Краевой 
научно-практической конференции Малой академии наук учащихся Кубани «Эврика». Член научного комитета, модератор 
Региональной научно-практической конференции «Развитие социально-культурной сферы Юга России». Бизнес-тренер, член 
экспертного совета Молодежного центра инноваций и технологий «Инвентум». Эксперт Центра поддержки предпринимательства Краснодарского края.</p> 
<p className={styles.whiteText}>За годы работы в вузе им опубликовано более 200 научных работ, включая 12 монографий 
и учебно-методических пособия, 24 статьи в центральных реферируемых журналах, а также в зарубежных изданиях.</p>
<h2 className={styles.whiteText}>Заместитель декана по отделению заочного и дистанционного обучения</h2>
          <h3 className={styles.whiteText}>Брацлавская Екатерина Яковлевна</h3>
          <img
      src="/head-of-department.jpg"
      alt="Заведующий кафедрой"
      className={styles.facultyImage}
    />
  <p className={styles.whiteText}>Кандидат экономических наук, доцент. Окончила Кубанский государственный университет, «Экономика и планирование промышленности» в 1983 году.</p>
      
        </div>

        </div>
    </div>
  );
};

export default StructureSection;

