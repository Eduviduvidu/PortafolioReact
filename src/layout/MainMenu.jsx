import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@layout/LangSwitcher";
import "@css/layout/MainMenu.css";

export default function MainMenu() {
  const { t } = useTranslation("mainMenu");
  return (
    <Navbar id="main-menu" bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/" className="navbar-brand comment-color">//E</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-text" />
        <Navbar.Collapse id="navbar-text">
          <Nav className="me-auto mb-2 mb-lg-0">
            {/* <Nav.Link as={NavLink} to="/" end>
              {t("Home")}
            </Nav.Link> */}
            <Nav.Link as={NavLink} to="/cv">
              {t("My CV")}
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to="/projects">
              {t("Projects")}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              {t("Contact")}
            </Nav.Link> */}
            <LanguageSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
