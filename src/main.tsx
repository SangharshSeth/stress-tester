import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import {About} from "./pages/About.tsx";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import LoadTest from './components/LoadTest.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StrictMode>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="about" element={<About />} />
                <Route path="app" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="load-test" element={<LoadTest />} />
                </Route>
            </Routes>
        </StrictMode>,
    </BrowserRouter>

)
