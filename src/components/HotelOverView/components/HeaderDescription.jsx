import styles from './headerDescription.module.scss';
import HeaderDescriptionStars from './HeaderDescriptionStars';
import HeaderDescriptionRattingBox from './HeaderDescriptionRattingBox';
import { Icon, UnderLineBTN } from '../../Layouts';

function HeaderDescription() {
  return (
    <div className={styles.overviewDescription}>
      <h1 className={styles.descriptionHeading}>hotel las palmas</h1>
      <HeaderDescriptionStars />
      <UnderLineBTN className={styles.locationBTN}>
        <Icon iconSrc='location-pin' className={styles.overviewLocationIcon} /> albuferia, portugal
      </UnderLineBTN>
      <HeaderDescriptionRattingBox />
    </div>
  );
}

export default HeaderDescription;
