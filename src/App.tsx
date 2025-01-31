import './App.scss'
import {Header} from "./components/Header/Header.tsx";
import {Main} from "./components/Main/Main.tsx";
import {Footer} from "./components/Footer/Footer.tsx";

export function App() {
    return (
        <>
            <div className="container">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </>
    )
}



