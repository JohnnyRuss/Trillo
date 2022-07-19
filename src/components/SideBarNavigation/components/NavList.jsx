import styles from './navList.module.scss';
import NavItem from './NavItem';

function NavList() {
  return (
    <ul className={styles.sideBarNavList}>
      <NavItem iconSrc='home' caption='hotel' path='#' />
      <NavItem iconSrc='aircraft-take-off' caption='flight' path='#' />
      <NavItem iconSrc='key' caption='car rental' path='#' />
      <NavItem iconSrc='map' caption='tours' path='#' />
    </ul>
  );
}

export default NavList;
