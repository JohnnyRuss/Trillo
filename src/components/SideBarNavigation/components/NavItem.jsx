/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './navItem.module.scss';
import { Icon } from '../../Layouts';

function NavItem({ caption, path, iconSrc }) {
  return (
    <li className={styles.sideBarNavListItem}>
      <a href={path} className={styles.sideBarNavListLink}>
        <Icon iconSrc={iconSrc} className={styles.sideBarNavListItemIcon} />
        <span>{caption}</span>
      </a>
    </li>
  );
}

export default NavItem;
