import React from 'react';
import styles from './Display.module.css';
import Card from './Card/Card';

const Display = () => {
  return (
  <div className={styles.container}>
    <div className={styles.title}>
        Liste des avis
    </div>
    <div className={styles.cards}>
        <Card category={"Professeur"} name="John" content="This is a feedback message." />
        <Card category={"Professeur"} name="John" content="This is a feedback message." />
        <Card category={"Professeur"} name="John" content="This is a feedback message." />
        <Card category={"Professeur"} name="John" content="This is a feedback message." />
        <Card category={"Professeur"} name="John" content="This is a feedback message." />
    </div>
  </div>
  );
};

export default Display;
