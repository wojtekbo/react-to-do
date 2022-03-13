import styles from './Card.module.scss';
import {toggleCardFavorite} from '../../redux/store';
import {useDispatch} from 'react-redux';

const Card = (props) => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    console.log('id', id);
    dispatch(toggleCardFavorite(id));
  };
  return (
    <li className={styles.card}>
      {props.title} <span className={`fa ${props.isFavorite ? 'fa-star' : 'fa-star-o'}`} onClick={() => handleClick(props.id)}></span>
    </li>
  );
};

export default Card;
