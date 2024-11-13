import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from "./component/common/Logo";
import RecipePage from "./page/RecipePage";

// Define two simple components
const Home = () => (
    <div>
        <h1>Home Page</h1>
        <Link to="/about">Go to About</Link>
    </div>
);

const About = () => (
    <div>
        <h1>About Page</h1>
        <Link to="/">Go to Home</Link>
    </div>
);

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