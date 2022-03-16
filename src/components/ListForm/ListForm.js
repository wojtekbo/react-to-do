import {useState} from 'react';
import {useDispatch} from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import {addList} from '../../redux/listsRedux';
import styles from '../ColumnForm/ColumnForm.module.scss';

const ListForm = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({title, description}));
    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label className={styles.label}>Title:</label>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <label className={styles.label}>Description:</label>
      <TextInput value={description} onChange={(e) => setDescription(e.target.value)} />
      <Button>Add List</Button>
    </form>
  );
};

export default ListForm;
