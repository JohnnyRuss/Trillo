import styles from './details.module.scss';
import Description from './Description';
import Reviews from './Reviews';

function Details() {
  return (
    <div className={styles.detailsContainer}>
      <Description />
      <Reviews />
    </div>
  );
}

export default Details;
