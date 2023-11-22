import classNames from 'classnames/bind';
import styles from './Thumbnail.module.scss';
import CreditCardLarge from '../../../static/icons/credit-card-large.svg?react';
import CreditCardRegular from '../../../static/icons/credit-card-regular.svg?react';
import CashLarge from '../../../static/icons/cash-large.svg?react';
import CashRegular from '../../../static/icons/cash-regular.svg?react';
import QRCodeLarge from '../../../static/icons/qr-code-large.svg?react';
import QRCodeRegular from '../../../static/icons/qr-code-regular.svg?react';
import { ThumbnailProps } from './Thumbnail.types';

const makeClass = classNames.bind(styles);

const icon = {
  regular: {
    card: <CreditCardRegular />,
    cash: <CashRegular />,
    qr: <QRCodeRegular />,
  },
  large: {
    card: <CreditCardLarge />,
    cash: <CashLarge />,
    qr: <QRCodeLarge />,
  },
};

function Thumbnail({ type, size = 'regular' }: ThumbnailProps) {
  return (
    <div className={makeClass('thumbnailComponent', size)}>
      {icon[size][type]}
    </div>
  );
}

export default Thumbnail;
