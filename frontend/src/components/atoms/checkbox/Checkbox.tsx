import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';

type CheckboxProps = {
  label: string;
  isChecked: boolean;
  onChange?: () => void;
};

const makeClass = classNames.bind(styles);

function Checkbox({ label, isChecked, onChange }: CheckboxProps) {
  return (
    <div className={makeClass('checkboxComponent')}>
      <label className={makeClass('checkboxLabel')} htmlFor={label}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          id={label}
        />
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
