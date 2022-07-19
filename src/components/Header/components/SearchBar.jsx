import styles from './searchBar.module.scss';
import { Icon } from '../../Layouts';

function SearchBar() {
  return (
    <form className={styles.headerForm}>
      <input type='text' placeholder='search hotels' className={styles.searchField} />
      <button className={styles.searchBtn}>
        <Icon className={styles.searchIcon} iconSrc='magnifying-glass' />
      </button>
    </form>
  );
}

export default SearchBar;
