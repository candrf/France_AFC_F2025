import {Outlet} from "react-router-dom";
import AppNavbar from "./components/AppNavbar.jsx";

function App() {

// App acts as the layout page.
// Loads NavBar on every page and uses Outlet to render current route
    return (
        <>
            <AppNavbar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default App;
