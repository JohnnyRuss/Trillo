import styles from './btn.module.scss';

function UnderLineBTN({ children, className }) {
  return <div className={`${className} ${styles.underlineBtn}`}>{children}</div>;
}

export default UnderLineBTN;
