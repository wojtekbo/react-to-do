import {useSelector} from 'react-redux';
import styles from './Column.module.scss';
import Card from './../Card/Card';
import CardForm from './../CardForm/CardForm';
import {getFilteredCards} from '../../redux/cardsRedux';

const Column = (props) => {
  const cards = useSelector((state) => getFilteredCards(state, props.id));
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} isFavorite={card.isFavorite} columnId={card.columnId} title={card.title} id={card.id} />
        ))}
      </ul>
      <CardForm columnId={props.columnId} />
    </article>
  );
};

export default Column;
