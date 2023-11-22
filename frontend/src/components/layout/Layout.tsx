import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';
import { ReactNode } from 'react';
import Header from '../organisms/header/Header';
import styles from './Layout.module.scss';

const makeClass = classNames.bind(styles);

type LayoutProps = {
  children?: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className={makeClass('layoutComponent')}>
      <Header />
      <main className={makeClass('main')}>{children ?? <Outlet />}</main>
    </div>
  );
}

export default Layout;
