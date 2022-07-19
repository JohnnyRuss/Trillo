import styles from './actions.module.scss';
import ActionBTN from './ActionBTN';

function Actions() {
  return (
    <div className={styles.actions}>
      <h2 className={styles.bookNow}>Good news! We have 4 rooms for your selected dates </h2>
      <ActionBTN />
    </div>
  );
}

export default Actions;
