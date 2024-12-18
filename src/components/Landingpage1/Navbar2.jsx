import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../pages/components2/logo.png";
import menu from "../../pages/components2/menu_icon.png";
import { Link } from "react-router-dom";

function CollapsibleExample({ pricingScreen }) {
  return (
    <>
      <section>
        <div
          className={`${
            pricingScreen ? "header-pricing" : "hello"
          } background-image`}
        >
          <div class="container">
            <div class="upper-content">
              <Navbar
                collapseOnSelect
                expand="lg"
                className="bg-body-none text-bg-none"
              >
                <Container className="p-0">
                  <img src={logo} style={{ height: "80px" }} alt="aniquest" />
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navbuttons ms-auto text-center"></Nav>
                    <div className="navigator">
                      <Link
                        to="/"
                        className="nav-buttons text-white text-decoration-none"
                      >
                        Landing
                      </Link>
                      <Link
                        className="nav-buttons text-white text-decoration-none"
                        to="/pricing"
                      >
                        pricing
                      </Link>
                      <Link
                        to="/blog"
                        className="nav-buttons text-white text-decoration-none"
                      >
                        Blog
                      </Link>
                      <Link
                        to="/aboutus"
                        className="nav-buttons text-white text-decoration-none"
                      >
                        Translator
                      </Link>
                    </div>
                    <Nav>
                      {pricingScreen ? (
                        <>
                          <Nav.Link eventKey={2} href="#memes">
                            <button
                              className="getstarted"
                              style={{ borderRadius: "5px" }}
                            >
                              Get Started
                            </button>
                          </Nav.Link>
                          <Nav.Link href="#deets" className="login text-dark">
                            Logout
                          </Nav.Link>

                          <span
                            style={{ fontSize: "30px" }}
                            onclick="openNav()"
                          >
                            <img
                              className="menu-image"
                              src={menu}
                              alt="aniquest"
                            />
                          </span>
                        </>
                      ) : (
                        <>
                          <Nav.Link
                            href="#deets"
                            className="login text-white d-flex"
                          >
                            Login
                          </Nav.Link>
                          <Nav.Link eventKey={2} href="#memes">
                            <button className="getstarted">Get Started</button>
                          </Nav.Link>
                        </>
                      )}
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CollapsibleExample;
