import styles from './userNavigation.module.scss';
import { Badge, UserNamedRoundImage } from '../../Layouts';

function UserNavigation() {
  return (
    <nav className={styles.userNavigation}>
      <Badge iconSrc='bookmark' notification='7' className={styles.userNavIcon} />
      <Badge iconSrc='message' notification='3' className={styles.userNavIcon} />
      <UserNamedRoundImage imgSrc='user-1.jpg' className={styles.userImage} userName='harry' />
    </nav>
  );
}

export default UserNavigation;
