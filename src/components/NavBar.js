import React from "react";

import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { CNavbar } from "@coreui/react";
import { CContainer } from "@coreui/react";
import { CNavbarBrand } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Alert } from "@coreui/react";
import { NavItem } from "react-bootstrap";
import { CNavbarToggler } from "@coreui/react";
import { CCollapse } from "@coreui/react";
import { CNavbarNav, CNavItem, CNavLink } from "@coreui/react";

export default function NavBar() {
  const [visible, setVisible] = useState(false);

  return (
    <CNavbar expand="lg" colorScheme="light" className="bg-light">
      <CContainer fluid>
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="/main" active>
                Main
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/create-user">Create User</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/login">Login User</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#" disabled>
                Disabled
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
}
