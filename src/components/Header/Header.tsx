import {Logo} from "./Logo/Logo.tsx";
import {useState} from "react";

export const Header = () => {
    const [isShowLogo, setShowLogo] = useState(true);

    return (
        <header>
            <button onClick={() => setShowLogo(!isShowLogo)}>
                { !isShowLogo ? 'Показать лого' : 'Скрыть лого' }
            </button>

            <Logo isShowLogo={isShowLogo} />

            <nav>
                <a href="">Домой</a>
                <a href="">Каталог</a>
                <a href="">О компании</a>
            </nav>
        </header>
    )
}