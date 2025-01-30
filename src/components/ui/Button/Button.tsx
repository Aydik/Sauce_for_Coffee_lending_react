import './Button.scss'

interface ButtonProps {
    title: string;
    classNames?: string[]; // Сделаем необязательным
}

export const Button = ({ title, classNames = [] }: ButtonProps) => {
    return (
        <button className={`button ${classNames.join(" ")}`}>{title}</button>
    );
};
