import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";

function Events() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const eventsArray = [
    {
      date: new Date("2026-03-02"),
      title: "The trials of Rev. Barnwell by Lisa Ellis",
      details: "A crime of the worst kind, and a cover-up uncovered",
    },
    {
      date: new Date("2026-04-13"),
      title: "Eagle House, Batheaston by Claire Mills",
      details: "A refuge for Suffragettes released from prison",
    },
    {
      date: new Date("2026-05-11"),
      title: "Working at Chatsworth House by Julie Pelly",
      details:
        "Julie’s personal experiences of Chatsworth",
    },
    {
      date: new Date("2026-06-01"),
      title: "The Saxon Church in Bradford-on-Avon by Robert Arkell",
      details: "A history of St Laurence Church",
    },
    {
      date: new Date("2026-08-03"),
      title: "A history of Dowty in Atworth by Ally McConnell",
      details: "Delving into the archives and personal recollections",
    },
    {
      date: new Date("2026-09-07"),
      title: "A history of Shaw & Whitley Part 2 by Peter Richardson",
      details: "Continuing on from Peter’s talk in 2024",
    },
    {
      date: new Date("2026-10-05"),
      title: "A history of Melksham Station by Graham Ellis",
      details: "From 1848 to the present day",
    },
    {
      date: new Date("2026-11-02"),
      title: "A history of the Wansdyke by Ellie Stone",
      details: "Looking at its construction and purpose",
    },
    {
      date: new Date("2026-12-07"),
      title: "AGM & Party",
      details: "Our end of year meeting and party!",
    },
  ];

  const upcomingEvents = [];
  const recentEvents = [];
  const currentDate = new Date();

  for (let i = 0; i < eventsArray.length; i++) {
    if (eventsArray[i].date < currentDate) {
      recentEvents.push(eventsArray[i]);
    } else {
      upcomingEvents.push(eventsArray[i]);
    }
  }

  recentEvents.sort((a, b) => b.date - a.date);

  const formatDate = (date) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = monthsOfYear[date.getMonth()];

    const daySuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${dayOfWeek} ${dayOfMonth}${daySuffix(dayOfMonth)} ${month}`;
  };

  return (
    <section id="events_component">
      <h2> 2026 Programme</h2>
      <p>
        All events take place at{" "}
        <a
          href="https://atworthvillagehall.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Atworth Village Hall
        </a>{" "}
        and begin at 7:30pm.
      </p>

      <div id="upcoming_events">
        <h4>Upcoming Events</h4>
        {upcomingEvents.map((event) => {
          return (
            <div className="event_div" key={event.title}>
              <p className="event_date">{formatDate(event.date)}</p>
              <p className="event_title">{event.title}</p>
              <p className="event_details">{event.details}</p>
            </div>
          );
        })}
      </div>

      {windowWidth > 800 ? (
        <>
          <h4>Past Events</h4>
          {recentEvents.map((event) => {
            return (
              <div className="event_div" key={event.title}>
                <p className="event_date">{formatDate(event.date)}</p>
                <p className="event_title">{event.title}</p>
                <p className="event_details">{event.details}</p>
              </div>
            );
          })}
        </>
      ) : (
        <Accordion flush style={{ margin: "0px", padding: "0px" }}>
          <Accordion.Item
            style={{ margin: "0px", padding: "0px" }}
            eventKey="0"
          >
            <Accordion.Header
              className="accordian_header"
              style={{ padding: "0px", margin: "0px" }}
            >
              {" "}
              <h4 style={{ margin: "-20px", padding: "0px" }}>Past Events</h4>
            </Accordion.Header>
            <Accordion.Body>
              {recentEvents.map((event) => {
                return (
                  <div className="event_div" key={event.title}>
                    <p className="event_date">{formatDate(event.date)}</p>
                    <p className="event_title">{event.title}</p>
                    <p className="event_details">{event.details}</p>
                  </div>
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </section>
  );
}

export default Events;
