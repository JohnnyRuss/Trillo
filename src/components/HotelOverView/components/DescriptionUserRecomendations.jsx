import styles from './descriptionUserRecomendations.module.scss';

function DescriptionUserRecomendations() {
  return (
    <div className={styles.recomendedBox}>
      <p className={styles.recommendCount}>lucy and 3 other friends recommend this hotel.</p>
      <div className={styles.recommendedByFriends}>
        <img src='/assets/user-3.jpg' alt='user' className={styles.recommendFriend} />
        <img src='/assets/user-4.jpg' alt='user' className={styles.recommendFriend} />
        <img src='/assets/user-5.jpg' alt='user' className={styles.recommendFriend} />
        <img src='/assets/user-6.jpg' alt='user' className={styles.recommendFriend} />
      </div>
    </div>
  );
}

export default DescriptionUserRecomendations;
