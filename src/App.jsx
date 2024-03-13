import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from './pages/MainLayout'
import Creps from "./pages/Cres";
import './App.css';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="creps" element={<Creps />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App