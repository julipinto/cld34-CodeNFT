import './styles.css';
import clsx from 'clsx';

interface IButton {
  size: 'small' | 'medium'
  text: string
  primary?: true
}

function Button({ size, text, primary = true }: IButton) {
  return <button className={clsx(`button-${size}`, primary && 'button-primary')}>
    {text.toUpperCase()}
  </button>
}

export default Button