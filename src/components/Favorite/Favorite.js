import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

function Favorite(props) {
  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.subtitle}>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

export default Favorite;
