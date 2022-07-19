import styles from './badge.module.scss';
import { Icon } from '../';

function Badge({ className, iconSrc, notification }) {
  return (
    <div className={`${className} ${styles.badgeBox}`}>
      <Icon className={styles.badgeIcon} iconSrc={iconSrc} />
      <span className={styles.notificationBox}>{notification}</span>
    </div>
  );
}

export default Badge;
