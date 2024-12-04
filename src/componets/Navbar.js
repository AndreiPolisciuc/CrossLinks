import React from 'react';
import {Container, Nav, Navbar as NavbarBS} from 'react-bootstrap';



function Navbar() {
    return (
        <NavbarBS expand="lg" className="fixed-top bg-body-tertiary shadow z-1">
            <Container>
                <NavbarBS.Brand className={'col-md-2 col-6'} href="">
                    <img className={'w-100'} src={'logo.jpg'} alt="logo" />
                </NavbarBS.Brand>
                <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBS.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#missionaries">Missionaries</Nav.Link>
                        <Nav.Link href="#about-us">About Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <span className={'fs-6 fst-italic me-2'}>We welcome your support:</span>
                        <div className={"d-flex"}>
                            <img className={"w-75 justify-content-center"} style={{maxWidth:"70px"}} alt="Make payments with PayPal - it's fast, free and secure!"
                                  src={"PayPal.gif"}/>
                        </div>
                    </Nav>
                </NavbarBS.Collapse>
            </Container>
        </NavbarBS>
    );
}

export default Navbar;