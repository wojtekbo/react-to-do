import styles from './List.module.scss';
import {useSelector} from 'react-redux';
import Column from './../Column/Column';
import SearchForm from './../SearchForm/SearchForm';
import ColumnForm from './../ColumnForm/ColumnForm';
import {getListById} from '../../redux/listsRedux.js';
import {getColumnsByList} from '../../redux/columnsRedux.js';
import {useParams} from 'react-router';
import {Navigate} from 'react-router-dom';

const List = (props) => {
  const {listId} = useParams();
  const listData = useSelector((state) => getListById(state, listId));
  const columns = useSelector((state) => getColumnsByList(state, listId));
  if (!listData) return <Navigate to="/" />;
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} columnId={column.id} {...column} />
        ))}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;
