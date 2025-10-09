import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import App from './App.jsx'
import Splash from "./pages/Splash.jsx";
import Menu from "./pages/Menu.jsx";
import Hiring from "./pages/Hiring.jsx";
import Error from "./pages/Error.jsx";

// Uses react router in declarative mode for path routing
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route element={<App/>}>
                  <Route index element={<Splash />} />  {/* default path*/}
                  <Route path="menu" element={<Menu />} />
                  <Route path="hiring" element={<Hiring />} />
                  <Route path="*" element={<Error />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
