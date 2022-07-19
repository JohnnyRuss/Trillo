import styles from './image.module.scss';

function UserRoundImage({ imgSrc, alt, className }) {
  return (
    <figure className={`${className} ${styles.userImageRound}`}>
      <img src={`/assets/${imgSrc}`} alt={alt} className={styles.image} />
    </figure>
  );
}

export default UserRoundImage;
