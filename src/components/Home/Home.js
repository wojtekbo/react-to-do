import React from 'react';
import Hero from '../Hero/Hero';
import List from '../List/List';
import SearchForm from '../SearchForm/SearchForm';
import style from './Home.module.scss';

function Home(props) {
  return (
    <div className={style.home}>
      <Hero />
      <SearchForm />
      <List />
    </div>
  );
}

export default Home;
