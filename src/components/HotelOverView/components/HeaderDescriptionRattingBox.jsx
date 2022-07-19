import styles from './headerDescriptionRattingBox.module.scss';

function HeaderDescriptionRattingBox() {
  return (
    <div className={styles.rattingBox}>
      <div className={styles.avgRatting}>8.6</div>
      <div className={styles.avgRattingCount}>429 votes</div>
    </div>
  );
}

export default HeaderDescriptionRattingBox;
