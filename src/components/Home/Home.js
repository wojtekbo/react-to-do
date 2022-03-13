import React from 'react';
import Hero from '../Hero/Hero';
import ListForm from '../ListForm/ListForm';
import Lists from '../Lists/Lists';
import style from './Home.module.scss';

function Home(props) {
  return (
    <div className={style.home}>
      <Hero />
      <Lists />
      <ListForm />
    </div>
  );
}

export default Home;
