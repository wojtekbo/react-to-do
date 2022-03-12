import React from 'react';
import styles from './PageTitle.module.scss';

function PageTitle(props) {
  return <h1 className={styles.title}>{props.children}</h1>;
}

export default PageTitle;
