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
      date: new Date("2025-03-03"),
      title: "A history of letterpress printing by Philip McMullen",
      details: "Including the private press movement of Britain",
    },
    {
      date: new Date("2025-04-07"),
      title: "The Moulton Trust by Dave Ecob",
      details: "A talk about Alex Moulton, his work and his home",
    },
    {
      date: new Date("2025-05-12"),
      title: "The Melksham Murderer by Lisa Ellis",
      details:
        "Delving into a dark episode in Melksham’s past",
    },
    {
      date: new Date("2025-06-02"),
      title: "1000 years of warp & weft by David Birks",
      details: "The story of the woollen trade in Trowbridge",
    },
    {
      date: new Date("2025-08-04"),
      title: "John Aubrey by Julie Davis",
      details: "Wiltshire’s first “trowel blazer” archaeologist",
    },
    {
      date: new Date("2025-09-01"),
      title: "Christopher Wren by Ruth Butler",
      details: "From astronomer to architect",
    },
    {
      date: new Date("2025-10-06"),
      title: "Wiltshire pastimes by Ally McConnell",
      details: "Sport & recreation through Wiltshire’s history",
    },
    {
      date: new Date("2025-11-03"),
      title: "Medieval deer parks by Robert Arkell",
      details: "A look at the deer parks in the Bradford Hundred",
    },
    {
      date: new Date("2025-12-01"),
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
      <h2> 2025 Programme</h2>
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
