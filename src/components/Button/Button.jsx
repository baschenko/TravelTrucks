import clsx from 'clsx';
import styles from './Button.module.css';

const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button
      type="button"
      className={clsx(styles.button, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
