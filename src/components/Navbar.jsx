import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

function MyNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" >
          CRUD
        </NavbarBrand>
        <Nav navbar className='fw-bold text-white'>
          <NavItem>
            <Link to={"/companies"}>
              Empresas
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default MyNavbar;