import styles from './button.module.css';

interface ButtonProps {
    label?: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    children?: React.ReactNode;
}

export default function Button({ label, onClick, disabled=false, className, type= 'submit', children }: ButtonProps) {
  return (
    <div className={styles.buttonDiv}>
        <button
            className={`${styles.button} ${className}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {children || label || 'Click Me'}
        </button>
    </div>
  )
}
