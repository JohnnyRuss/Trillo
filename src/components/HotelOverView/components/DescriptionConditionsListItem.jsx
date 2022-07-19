import styles from './descriptionConditionsListItem.module.scss';
import { Icon } from '../../Layouts';

function DescriptionConditionsListItem({ con }) {
  return (
    <li className={styles.descriptionListItem}>
      <Icon iconSrc='chevron-small-right' className={styles.listIcon} />
      <p>{con.condition}</p>
    </li>
  );
}

export default DescriptionConditionsListItem;
