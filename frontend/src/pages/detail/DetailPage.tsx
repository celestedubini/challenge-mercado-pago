import classNames from 'classnames/bind';
import styles from './DetailPage.module.scss';
import DetailComponent from '../../components/organisms/detail-component/DetailComponent';

const makeClass = classNames.bind(styles);

function DetailPage() {
  return (
    <div className={makeClass('detailPage')}>
      <DetailComponent />
    </div>
  );
}

export default DetailPage;
