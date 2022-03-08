import {useSelector} from 'react-redux';
import styles from './Column.module.scss';
import Card from './../Card/Card';
import CardForm from './../CardForm/CardForm';

const Column = (props) => {
  const cards = useSelector((state) => state.cards).filter((card) => card.columnId === props.id);
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} columnId={card.columnId} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={props.id} action={props.action} />
    </article>
  );
};

export default Column;
