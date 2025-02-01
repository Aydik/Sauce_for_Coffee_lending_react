import './Button.scss'
import {ButtonProps} from './Button.interface.ts'

export const Button = ({title, classNames = []}: ButtonProps) => {
    return (
        <button className={`button ${classNames.join(" ")}`}>{title}</button>
    );
};
