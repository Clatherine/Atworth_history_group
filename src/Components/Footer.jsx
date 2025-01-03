import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';


function Footer(){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    
    return(
        <section id="footer">
            <div className="footerDiv left_footer">
            <h4> Contact</h4>
            <p>Membership enquiries: Keith Ruffell (kgruffell@gmail.com)</p>
            <p>Museum enquiries: David Hough (01225 793647)</p>
       
            </div >
             <div className="footerDiv footerlink">   
            <Nav >
              {windowWidth>=600?  <Nav.Link id="footer_link"href="#about" onClick={(e) => handleNavClick(e, 'about')}>Back to top</Nav.Link> : <Nav.Link href="#whole_page" onClick={(e) => handleNavClick(e, 'header')}>Back to top</Nav.Link> }
             
                </Nav>
                <p> Website made by  <a
              className="portfolioLink"
         href="https://catherinepulman.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >Catherine Pulman 2024
            </a></p>
                </div>
              
        </section>
    )
}

export default Footer