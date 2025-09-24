import { Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Menu from "./pages/Menu";
import Hiring from "./pages/Hiring";
import Error from "./pages/Error";

function App() {

  return (
      <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="*" element={<Error />} />
      </Routes>
  )
}

export default App
