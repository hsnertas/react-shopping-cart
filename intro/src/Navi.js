import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import { Link } from "react-router-dom";
const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Hasan App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <CartSummary
              removeFromChart={props.removeFromChart}
              cart={props.cart}
            />
          </Nav>
          <Link to="/form1">Form 1 </Link>
          <Link to="/form2">Form 2 </Link>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
