import {
    Navbar,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem
} from "reactstrap";
import{NavLink} from "react-router-dom";
import { useState } from "react";
import burgerBrand from "../assets/images/neon-burger-brand.webp";

function AppNavbar() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <>
        {/*Nav bar uses reactstrap*/}
        <Navbar color="dark" expand="md" dark>
            <NavLink to="/">
                <img className="brand" src={burgerBrand} alt="neon burger brand"
                     width="40" height="40"/>
            </NavLink>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={collapsed} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        {/*NavLink comes from react-router-dom to prevent page reload*/}
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/menu" className="nav-link">Menu</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/hiring" className="nav-link">Hiring</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        </>
    );
}

export default AppNavbar;