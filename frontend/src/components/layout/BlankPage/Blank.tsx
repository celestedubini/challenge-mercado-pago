import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './Blank.module.scss';

type BlanKPage = {
  children: ReactNode;
};

const makeClass = classNames.bind(styles);

function Blank({ children }: BlanKPage) {
  return <div className={makeClass('blankComponent')}>{children}</div>;
}

export default Blank;
