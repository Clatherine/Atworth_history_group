import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    let headerOffset = 0;
    if (windowWidth >= 700) {
      headerOffset = document.getElementById("header").offsetHeight;
    }

    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section>
      {windowWidth > 800 && (
        <Navbar id="header" fixed="top" data-bs-theme="dark" collapseOnSelect>
          <div>
            <Navbar.Brand
              href="#home"
              className="headerTitle"
            >
             <picture className="header_image">
                  <source
                    srcSet="/images/tower_no_border.webp"
                    type="image/webp"
                  />
                 <img
                  className="header_image"
                  src="/images/tower_no_border.jpg"
                  alt="Atworth History Group logo"
                />
                 
                </picture>
              <p>Atworth History Group</p>
            </Navbar.Brand>
          </div>
          <div id="header_links">
            <Nav style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
              >
                About & Programme
              </Nav.Link>
              <Nav.Link
                href="#museum"
                onClick={(e) => handleNavClick(e, "museum")}
              >
                Atworth Museum
              </Nav.Link>
              <Nav.Link
                href="#history"
                onClick={(e) => handleNavClick(e, "history")}
              >
                History of Atworth
              </Nav.Link>

              <Nav.Link
                href="#gallery-component"
                onClick={(e) => handleNavClick(e, "gallery-component")}
              >
                Photo Gallery
              </Nav.Link>
              <Nav.Link
                href="#publications"
                onClick={(e) => handleNavClick(e, "publications")}
              >
                Publications & Documents
              </Nav.Link>
            </Nav>
          </div>
        </Navbar>
      )}
      {windowWidth >= 700 && windowWidth <= 800 && (
        <Navbar id="header" fixed="top" data-bs-theme="dark" collapseOnSelect>
          <div>
            <Navbar.Brand href="#home" className="headerTitle" 
                
                >
                 <picture className="header_image">
                  <source
                    srcSet="/images/tower_no_border.webp"
                    type="image/webp"
                  />
                 <img
                  className="header_image"
                  src="/images/tower_no_border.jpg"
                  alt="Atworth History Group logo"
                />
                 
                </picture>
              <p>Atworth History Group</p>
            </Navbar.Brand>
          </div>
          <div id="header_links">
            <Nav style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </Nav.Link>

              <Nav.Link
                href="#events"
                onClick={(e) => handleNavClick(e, "events")}
              >
                Programme
              </Nav.Link>
              <Nav.Link
                href="#museum"
                onClick={(e) => handleNavClick(e, "museum")}
              >
                Atworth Museum
              </Nav.Link>
              <Nav.Link
                href="#history"
                onClick={(e) => handleNavClick(e, "history")}
              >
                History of Atworth
              </Nav.Link>

              <Nav.Link
                href="#gallery-component"
                onClick={(e) => handleNavClick(e, "gallery-component")}
              >
                Photo Gallery
              </Nav.Link>
              <Nav.Link
                href="#publications"
                onClick={(e) => handleNavClick(e, "publications")}
              >
                Publications & Documents
              </Nav.Link>
            </Nav>
          </div>
        </Navbar>
      )}
      {windowWidth < 700 && (
        <Navbar
          id="header"
          expand="lg"
          data-bs-theme="dark"
          className="custom-navbar"
        >
          <div id="header_div">
            <Navbar.Brand href="#home" className="headerTitle" >
              {windowWidth > 400 ? (
                  <picture className="header_image">
                  <source
                    srcSet="/images/tower_no_border.webp"
                    type="image/webp"
                  />
                 <img
                  className="header_image"
                  src="/images/tower_no_border.jpg"
                  alt="Atworth History Group logo"
                />
                 
                </picture>
               
              ) : null}
              <p>Atworth History Group</p>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="toggle-custom"
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#events"
                onClick={(e) => handleNavClick(e, "events")}
              >
                Programme
              </Nav.Link>
              <Nav.Link
                href="#museum"
                onClick={(e) => handleNavClick(e, "museum")}
              >
                Atworth Museum
              </Nav.Link>
              <Nav.Link
                href="#history"
                onClick={(e) => handleNavClick(e, "history")}
              >
                History of Atworth
              </Nav.Link>

              <Nav.Link
                href="#gallery-component"
                onClick={(e) => handleNavClick(e, "gallery-component")}
              >
                Photo Gallery
              </Nav.Link>
              <Nav.Link
                href="#publications"
                onClick={(e) => handleNavClick(e, "publications")}
              >
                Publications & Documents
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </section>
  );
}
export default Header;
