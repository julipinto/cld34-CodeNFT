import './styles.css';
import clsx from 'clsx';

interface IButton {
  size: 'small' | 'medium' | 'full'
  text: string
  primary?: true
}

function Button({ size, text, primary = true }: IButton) {
  return <button className={clsx(`button-${size}`, primary && 'button-primary', 'smooth_transition')}>
    {text.toUpperCase()}
  </button>
}

export default Button