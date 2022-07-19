import styles from './headerGallery.module.scss';

function OverViewGallery() {
  return (
    <div className={styles.overViewGallery}>
      <figure className={styles.galleryItemFigure}>
        <img src='/assets/hotel-1.jpg' alt='hotel interier' className={styles.galleryItemImage} />
      </figure>
      <figure className={styles.galleryItemFigure}>
        <img src='/assets/hotel-2.jpg' alt='hotel interier' className={styles.galleryItemImage} />
      </figure>
      <figure className={styles.galleryItemFigure}>
        <img src='/assets/hotel-3.jpg' alt='hotel interier' className={styles.galleryItemImage} />
      </figure>
    </div>
  );
}

export default OverViewGallery;
