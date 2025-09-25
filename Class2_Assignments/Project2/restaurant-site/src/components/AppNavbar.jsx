import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem
} from "reactstrap";

import{NavLink} from "react-router-dom"
import { useState } from "react";

function AppNavbar() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
        {/*Nav bar uses reactstrap for styling*/}
        <Navbar color="dark" expand="md" dark>
            <NavbarBrand href="/">Andrew's Burgers</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={collapsed} navbar>

                <Nav className="me-auto" navbar>
                    <NavItem>
                        {/*NavLink comes from react-router-dom to prevent page reload, same as Link with additional styling*/}
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
        </div>
    );
}

export default AppNavbar;