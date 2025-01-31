import './App.scss'
import {Header} from "./components/Header/Header.tsx";
import {Main} from "./components/Main/Main.tsx";

export function App() {
    return (
        <>
            <div className="container">
                <Header/>
                <Main/>
            </div>
        </>
    )
}



