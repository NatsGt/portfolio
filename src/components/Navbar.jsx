import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";

const navLinks = [
  {
    id: 1,
    title: "Home",
    link: "#main",
    eventKey: "link-1"
  },
  {
    id: 2,
    title: "About",
    link: "#about",
    eventKey: "link-2"
  },
  {
    id: 3,
    title: "Skills",
    link: "#skills",
    eventKey: "link-3"
  },
  {
    id: 4,
    title: "Projects",
    link: "#projects",
    eventKey: "link-4"
  },
  {
    id: 5,
    title: "Contact",
    link: "#contact",
    eventKey: "link-5"
  }]

function NavItem(props) {
  return (
    <Nav.Item>
      <Nav.Link className="my-nav-link" href={props.link} eventKey={props.eventKey} >
        {props.title}
      </Nav.Link>
    </Nav.Item>
  )
}

function ToggleNavbar() {
  return (
    <div>
      <Navbar fixed="top" expand="lg" className="nav-container" activeKey="/home">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
            {navLinks.map(navItem => <NavItem key={navItem.id} title={navItem.title} link={navItem.link} eventKey={navItem.eventKey} />)}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default ToggleNavbar;
