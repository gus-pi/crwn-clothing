import './button.styles.scss';

const BUTTON_TYPES_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
} as const; // Use `as const` to infer a readonly type for the object.

type ButtonType = keyof typeof BUTTON_TYPES_CLASSES;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType; // Optional buttonType
  children: React.ReactNode;
}

const Button = ({ children, buttonType, ...otherProps }: ButtonProps) => {
  const buttonClass = buttonType ? BUTTON_TYPES_CLASSES[buttonType] : ''; // Safely handle undefined or invalid buttonType
  return (
    <button className={`button-container ${buttonClass}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
