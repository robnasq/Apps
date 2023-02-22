import { useEffect, useState } from "react";
import { NavBar, Container } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }

      window.addEventListener("scroll", onscroll);

      window.removeEventListener("scroll", onscroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return function BasicExample() {
    return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">Homeeeee</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink(home)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink(skills)}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink(projects)}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="nav-bar-text">
              <div className="social-icon">
                {/* <a href="#"><img src={} alt=""/></a>
                <a href="#"><img src={} alt=""/></a>
                <a href="#"><img src={} alt=""/></a> */}
              </div>
              <button className="vdd" onClick={() => console.log("connect")}>
                <span>Let's Connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
};
