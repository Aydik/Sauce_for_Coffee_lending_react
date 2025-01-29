import {useEffect, useState} from "react";

export type LogoProps = {
    isShowLogo: boolean;
}

export const Logo = ({ isShowLogo }: LogoProps) => {
    const [value, setValue] = useState(false);

    useEffect(() => {
        console.log('Я вызвался', value);

        return () => {
            console.log('Я уничтожился', value, isShowLogo);
        };
    }, [value, isShowLogo]);

    const toggleValue = () => {
        setValue(!value)
    };

    return (
        <button type='button' onClick={toggleValue}>
            { value ? 'крутой логотип' : 'обычный логотип' }
        </button>
    )
}