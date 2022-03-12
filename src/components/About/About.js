import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';

function About(props) {
  return (
    <div className={styles.about}>
      <PageTitle>About</PageTitle>
      <p className={styles.subtitle}>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

export default About;
