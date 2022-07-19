import styles from './headerDescriptionStars.module.scss';
import { Icon } from '../../Layouts';

function HeaderDescriptionStars() {
  return (
    <div className={styles.ratingStarsBox}>
      <Icon iconSrc='star' className={styles.overviewStarIcon} />
      <Icon iconSrc='star' className={styles.overviewStarIcon} />
      <Icon iconSrc='star' className={styles.overviewStarIcon} />
      <Icon iconSrc='star' className={styles.overviewStarIcon} />
      <Icon iconSrc='star' className={styles.overviewStarIcon} />
    </div>
  );
}

export default HeaderDescriptionStars;
