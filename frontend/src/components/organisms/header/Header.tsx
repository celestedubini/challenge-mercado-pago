import classNames from 'classnames/bind';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import MercadoPagoLogo from '../../../static/icons/mp-logo.svg?react';
import Button from '../../atoms/button/Button';

const makeClass = classNames.bind(styles);
function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className={makeClass('headerComponent')}>
      {location.pathname !== '/list' && (
        <Button
          className={makeClass('backButton')}
          onClick={() => navigate('/list')}
          aria-label="Back button"
        >
          <ArrowBackIcon className={makeClass('icon')} />
        </Button>
      )}
      <MercadoPagoLogo role="img" aria-label="Mercado Pago" />
    </header>
  );
}

export default Header;
