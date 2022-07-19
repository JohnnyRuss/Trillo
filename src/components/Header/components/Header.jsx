import styles from './header.module.scss';
import SearchBar from './SearchBar';
import UserNavigation from './UserNavigation';
import { Logo } from '../../Layouts';

function Header() {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <SearchBar />
      <UserNavigation />
    </header>
  );
}

export default Header;
