import styles from './descriptionConditionsList.module.scss';
import DescriptionConditionsListItem from './DescriptionConditionsListItem';

function DescriptionConditionsList({ conditions }) {
  return (
    <ul className={styles.descriptionList}>
      {conditions.map((con) => (
        <DescriptionConditionsListItem con={con} key={con.id} />
      ))}
    </ul>
  );
}

export default DescriptionConditionsList;
