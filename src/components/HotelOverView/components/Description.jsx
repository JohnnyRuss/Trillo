import styles from './description.module.scss';
import DescriptionConditionsList from './DescriptionConditionsList';
import DescriptionUserRecomendations from './DescriptionUserRecomendations';
import { hotelDescription } from '../../../lib';

function Description() {
  return (
    <div className={styles.description}>
      <p className={styles.descriptionText}>{hotelDescription.longInfo}</p>
      <p className={styles.descriptionText}>{hotelDescription.shortInfo}</p>
      <DescriptionConditionsList conditions={hotelDescription.conditions} />
      <DescriptionUserRecomendations />
    </div>
  );
}

export default Description;
