import styles from './main.module.scss';
import { SideBarNavigation, Content } from '../';

function Main() {
  return (
    <main className={styles.main}>
      <SideBarNavigation />
      <Content />
    </main>
  );
}

export default Main;
