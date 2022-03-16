import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import {useSelector} from 'react-redux';
import {getFavoriteCards} from '../../redux/cardsRedux';
import {Navigate} from 'react-router-dom';

function Favorite(props) {
  const cards = useSelector((state) => getFavoriteCards(state));
  // if (!cards[0]) return <Navigate to="/" />;
  // OR
  if (!cards[0]) return <PageTitle>No favorite cards</PageTitle>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <ul className={styles.cards}>
          {cards.map((card) => (
            <Card key={card.id} isFavorite={card.isFavorite} columnId={card.columnId} title={card.title} id={card.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Favorite;
