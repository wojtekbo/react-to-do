import {useState} from 'react';
import {useDispatch} from 'react-redux';
import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

// pytanie o budowe formularzy czy dla kazdego pola w formularzu bedzie osobny Stan?
const ColumnForm = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    /// pytanie o zapis w newColumn, czemu nie newColumn: {title: title, icon: icon}
    dispatch({type: 'ADD_COLUMN', payload: {title, icon}});
    setTitle('');
    setIcon('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label className={styles.label}>Title:</label>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <label className={styles.label}>Icon:</label>
      <TextInput value={icon} onChange={(e) => setIcon(e.target.value)} />
      <Button>Add Column</Button>
    </form>
  );
};

export default ColumnForm;
