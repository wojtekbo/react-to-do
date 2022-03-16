import styles from './Card.module.scss';
import {toggleCardFavorite, deleteCard} from '../../redux/cardsRedux';
import {useDispatch} from 'react-redux';

const Card = (props) => {
  const dispatch = useDispatch();
  const handleFavToggle = (id) => {
    dispatch(toggleCardFavorite(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteCard(id));
  };
  return (
    <li className={styles.card}>
      {props.title}{' '}
      <div>
        <i className={`fa ${props.isFavorite ? 'fa-star' : 'fa-star-o'}`} onClick={() => handleFavToggle(props.id)}></i>
        <i className="fa fa-trash" onClick={() => handleDelete(props.id)}></i>
      </div>
    </li>
  );
};

export default Card;
