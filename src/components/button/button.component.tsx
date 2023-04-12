import { FC, ButtonHTMLAttributes } from 'react';
import { 
    BaseButton, 
    GoogleSignInButton, 
    InvertedButton, 
    ButtonSpinner,
     } from './button.styles';


export enum BUTTON_TYPE_CLASSES {
    base = 'base',
    google = 'google-sign-in',
    inverted = 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton => 
({
 [BUTTON_TYPE_CLASSES.base]: BaseButton,
 [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
 [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
}[buttonType]);

export type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASSES;
    isloading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ 
    children, 
    buttonType, 
    isloading,
    ...otherProps 
}) => {
    const CustomButton = getButton(buttonType);
    return (
    <CustomButton disabled={isloading} { ...otherProps}>
    {isloading ? <ButtonSpinner /> : children}
    </CustomButton>
 );
};

export default Button;