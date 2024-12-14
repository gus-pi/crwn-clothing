import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';

export const BUTTON_TYPES_CLASSES = {
  base: 'base',
  google: 'google',
  inverted: 'inverted',
} as const;

type ButtonTypes = keyof typeof BUTTON_TYPES_CLASSES;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType: ButtonTypes;
}

const getButton = (buttonType: ButtonTypes = 'base') =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  }[BUTTON_TYPES_CLASSES[buttonType]]);

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
