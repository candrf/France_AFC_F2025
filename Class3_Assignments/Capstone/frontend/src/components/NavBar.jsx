import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import {NavLink} from "react-router-dom";
import '../index.css'
import brand from '../assets/Brand.png'

function NavBar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar
            expand="md"
            light
            className="px-4 shadow-sm"
            style={{
                backgroundColor: 'var(--navbar-bg)',
                borderBottom: '1px solid var(--border)',
            }}
        >
            {/* LEFT SIDE: Brand */}
            <NavbarBrand href="/" className="d-flex align-items-center gap-2">
                <img
                        className={"brand"}
                        src={brand}
                        alt="brand with the letters BF"
                    />
                <span className="fw-semibold" style={{ color: 'var(--text-primary)' }}>
          Bright Forge
        </span>
            </NavbarBrand>

            <NavbarToggler onClick={toggle} />

            {/* RIGHT SIDE: Links */}
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto d-flex align-items-center gap-3" navbar>
                    <NavItem>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `fw-semibold px-3 py-2 rounded-3 text-decoration-none ${
                                    isActive ? 'active-link' : 'inactive-link'
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="/inventory"
                            className={({ isActive }) =>
                                `fw-semibold px-3 py-2 rounded-3 text-decoration-none ${
                                    isActive ? 'active-link' : 'inactive-link'
                                }`
                            }
                        >
                            Inventory
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );

}

export default NavBar;