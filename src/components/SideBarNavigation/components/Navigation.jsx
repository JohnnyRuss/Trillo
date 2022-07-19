import styles from './navigation.module.scss';
import NavList from './NavList';
import Legal from './Legal';

function Navigation() {
  return (
    <nav className={styles.sideBarNavigation}>
      <NavList />
      <Legal />
    </nav>
  );
}

export default Navigation;
