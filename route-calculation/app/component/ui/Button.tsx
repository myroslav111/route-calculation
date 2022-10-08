import { ButtonHTMLAttributes, FC } from 'react';
import styles from '../../../styles/Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color: string;
  //   bgColor: string;
  cb: () => void;
  isDisabled?: boolean;
}

const Button: FC<IButton> = props => {
  const { title, cb, color, isDisabled, ...left } = props;
  return (
    <button
      {...left}
      className={styles.button}
      style={{ color: `${color}` }}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
};

export default Button;
