import styles from './reviews.module.scss';
import ReviewItem from './ReviewItem';
import { UnderLineBTN } from '../../Layouts';
import { hotelReviews } from '../../../lib';

function Reviews() {
  return (
    <div className={styles.reviews}>
      {hotelReviews.map((review) => (
        <ReviewItem review={review} key={review.id} />
      ))}

      <UnderLineBTN className={styles.showAllBtn}>shaw all &rarr;</UnderLineBTN>
    </div>
  );
}

export default Reviews;
