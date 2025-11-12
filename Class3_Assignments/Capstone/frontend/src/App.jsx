import NavBar from "./components/NavBar.jsx";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Inventory from "./pages/Inventory.jsx";


function App() {

  return (
    <>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inventory" element={<Inventory />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
