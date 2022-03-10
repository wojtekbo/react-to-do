import {useState} from 'react';
import {useDispatch} from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import {updateSearchTerm} from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchTerm(searchValue));
    // props.action({title: title}, props.columnId);
    setSearchValue('');
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
