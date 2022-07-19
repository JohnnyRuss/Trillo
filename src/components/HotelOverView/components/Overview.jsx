import styles from './overview.module.scss';
import OverviewHeader from './OverviewHeader';
import Details from './Details';
import Actions from './Actions';

function Overview() {
  return (
    <div className={styles.content}>
      <OverviewHeader />
      <Details />
      <Actions />
    </div>
  );
}

export default Overview;
