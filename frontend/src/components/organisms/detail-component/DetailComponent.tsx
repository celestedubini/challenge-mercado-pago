import classNames from 'classnames/bind';
import { useDetailInfo } from '../../../hooks/useDetailInfo';
import Thumbnail from '../../molecules/thumbnail/Thumbnail';
import Text from '../../atoms/text/Text';
import styles from './DetailComponent.module.scss';

const makeClass = classNames.bind(styles);

function DetailComponent() {
  const { data, error, loading } = useDetailInfo();
  if (loading) return <Text tag="p">Cargando</Text>;
  if (error) return <Text tag="p">Ocurrió un error</Text>;
  return (
    <div className={makeClass('container')}>
      <Thumbnail type={data!.type} size="large" />
      <div className={makeClass('textContainer')}>
        <Text tag="h1">{data!.title}</Text>
        <Text tag="h2">{data!.description}</Text>
        <Text tag="h3" className={makeClass('amount')}>{`$${
          data!.amount
        }`}</Text>
      </div>
    </div>
  );
}

export default DetailComponent;
