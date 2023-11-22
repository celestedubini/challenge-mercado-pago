import { type ButtonHTMLAttributes, forwardRef, Ref } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'MPBlue' | 'lightblue';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const makeClass = classNames.bind(styles);

// eslint-disable-next-line react/display-name
const Button = forwardRef(
  (
    {
      children,
      className,
      onClick,
      type = 'button',
      variant,
      ...props
    }: ButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={makeClass('buttonComponent', className, variant)}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default Button;
