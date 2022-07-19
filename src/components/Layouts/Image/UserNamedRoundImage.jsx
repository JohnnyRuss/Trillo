import styles from './image.module.scss';
import { UserRoundImage } from '../';

function UserNamedRoundImage({ className, imgSrc, userName }) {
  return (
    <div className={styles.userNamedRoundImage}>
      <UserRoundImage imgSrc={imgSrc} className={className}></UserRoundImage>
      <span className={styles.caption}>{userName}</span>
    </div>
  );
}

export default UserNamedRoundImage;
