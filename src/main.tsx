import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from "./component/common/Logo";
import RecipePage from "./page/RecipePage";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/recipe" element={<RecipePage/>}/>
            </Routes>

            <ToastContainer icon={<Logo variant={'light'}/>}/>
        </BrowserRouter>
    </StrictMode>,
);