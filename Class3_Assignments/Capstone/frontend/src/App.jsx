import NavBar from "./components/NavBar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Inventory from "./pages/Inventory.jsx";
import Error from "./pages/Error.tsx";


function App() {

  return (
    <>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
