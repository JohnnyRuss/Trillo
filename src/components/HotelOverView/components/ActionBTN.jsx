import styles from './actionBTN.module.scss';

function ActionBTN() {
  return (
    <button className={styles.btn}>
      <span className={styles.btnText}>book now</span>
      <span className={styles.btnInfoText}>only 4 rooms left</span>
    </button>
  );
}

export default ActionBTN;
