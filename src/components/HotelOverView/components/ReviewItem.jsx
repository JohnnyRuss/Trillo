import styles from './reviewItem.module.scss';

function ReviewItem({review}) {
  return (
    <figure className={styles.review}>
      <blockquote className={styles.reviewText}>{review.review}</blockquote>
      <figcaption className={styles.reviewUser}>
        <img src={review.userImg} alt='user' className={styles.reviewUserImage} />
        <div className={styles.userReviewBox}>
          <p className={styles.reviewUserName}>{review.userName}</p>
          <p className={styles.reviewDate}>{review.date}</p>
        </div>
        <div className={styles.reviewRating}>{review.rating}</div>
      </figcaption>
    </figure>
  );
}

export default ReviewItem;
