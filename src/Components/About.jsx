import { NavLink } from "react-bootstrap";
import Image from "./Image";
import { useState, useEffect } from "react";

function About (){
  const notice = {title: 'Notice', text: '2026 Programme added'}
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
 useEffect(() => {
   const handleResize = () => setWindowWidth(window.innerWidth);

   window.addEventListener("resize", handleResize);
   return () => window.removeEventListener("resize", handleResize);
 }, []);

    return (
      <section id="about_component">
        {!!notice.text && (
          <div id="news">
            <h2>{notice.title}</h2>
            <p>{notice.text}</p>
          </div>
        )}
        <h2> About</h2>
        <div>
          The Atworth History Group was founded in 1973. It is an interest group
          of 45 to 50 members which meets nine times per year to enjoy talks,
          given by visiting speakers and sometimes group members, on topics of
          interest in local and social history. 
        </div>{" "}
        <br></br>
        <Image />
        <div>
          <br></br>
          We meet in the{" "}
          <b>
            <a
              href="https://atworthvillagehall.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Atworth Village Hall
            </a>{" "}
          </b>
          at <b>7:30pm</b> on the{" "}
          <b>first Monday of each month March to December, except July when we have an outing</b>.
          Should the first Monday be a Bank Holiday (usually in May), we will meet on the second Monday. This
          year's programme of talks is shown 
          {windowWidth > 800 ? " on the left-hand section of this page. ": " below."}
        </div>
        <br></br>
        <div>
          You are welcome to join us as a guest (£5) or as a full member (£20).
          You can join as a guest and then count this against the year's
          subscription fee if you subsequently wish to become a full member.
        </div>
        <br></br>
        <div>
          To sign up as a guest or full member, please contact{" "}
          <b>Keith Ruffell </b>at <b>kgruffell@gmail.com</b>, or simply turn up
          to one of our talks and pay at the hall.
        </div>
        <br></br>
        <div>
          The Atworth History group also manages the <b>Atworth Museum</b>,
          which is open on the <b>last Sunday of the month</b> from{" "}
          <b>March to October</b>, inclusive, from <b>2:00pm to 4:00pm</b>. More
          details about the museum can be found{" "}
          <NavLink href="#museum" onClick={(e) => handleNavClick(e, "museum")}>
            below
          </NavLink>
          .
        </div>
      </section>
    );
}


export default About;