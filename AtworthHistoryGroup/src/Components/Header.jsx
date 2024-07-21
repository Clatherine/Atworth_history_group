
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

function Header (){

    const handleNavClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        const headerOffset = document.getElementById('header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      };
    
    return(<>
        <Navbar id="header" fixed="top" data-bs-theme="dark">
                <div>
             
            <Navbar.Brand href="#home">
              {/* <img id="header_image" src="/images/Gallery_pics/Clock Tower (1).jpg" alt="image of Clock tower"/>  */}
              Atworth History Group
            </Navbar.Brand>
            </div>
            <div id="header_links">
            <Nav >
              <Nav.Link href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</Nav.Link>
              <Nav.Link href="#history" onClick={(e) => handleNavClick(e, 'history')}>History of Atworth</Nav.Link>
              <Nav.Link href="#museum" onClick={(e) => handleNavClick(e, 'museum')}>Atworth Museum</Nav.Link>
              <Nav.Link href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>Photo Gallery</Nav.Link>
              <Nav.Link href="#publications" onClick={(e) => handleNavClick(e, 'publications')}>Publications & Documents</Nav.Link>
            </Nav>
           </div>
        </Navbar>
        <br></br>
        
        </>
    
    )
}
export default Header