// components/FreshmenSection.js
import DeanGreeting from '@/components/DeanGreeting'
import StudyStructure from '@/components/StudyStructure'
import PreparationsBeforeEducation from '@/components/PreparationsBeforeEducation'
import SportsOpportunities from '@/components/SportsOpportunities'
import styles from '@/styles/Pervak.module.css';

export default function FreshmenSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.centeredHeading}>Первокурсникам</h2>
      <DeanGreeting />
      <StudyStructure />
      <PreparationsBeforeEducation />
      <SportsOpportunities />
    </section>
  )
}
