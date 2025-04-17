import React from 'react';
import styles from './Card.module.css';

const Card = ({ name, category, content }) => {
  return (
    <div className={styles.card}>
      <div className={styles.category}>{category}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default Card;
