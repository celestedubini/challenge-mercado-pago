import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Thumbnail from '../../../molecules/thumbnail/Thumbnail';
import Text from '../../../atoms/text/Text';
import Button from '../../../atoms/button/Button';
import styles from './PaymentItem.module.scss';
import ChevronRight from '../../../../static/icons/chevron-right.svg?react';
import { PaymentItemProps } from '../Payment.types';

const makeClass = classNames.bind(styles);

function PaymentItem({
  type,
  title,
  description,
  amount,
  id,
}: PaymentItemProps) {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <Button
      onClick={() => {
        navigate(`/detail/${id}`);
      }}
      className={makeClass('paymentItem')}
      ref={ref}
      aria-label={title}
    >
      {isVisible ? (
        <>
          <Thumbnail type={type} size="regular" />
          <div className={makeClass('info-container')}>
            <Text tag="p" className={makeClass('title')}>
              {title}
            </Text>
            <Text tag="p" className={makeClass('description')}>
              {description}
            </Text>
          </div>
          <div className={makeClass('amount-container')}>
            <Text tag="p" className={makeClass('amount')}>
              $
              {parseFloat(amount.replace(',', '.'))
                .toFixed(2)
                .toString()
                .replace('.', ',')}
            </Text>
          </div>
          <ChevronRight />
        </>
      ) : null}
    </Button>
  );
}

export default PaymentItem;
