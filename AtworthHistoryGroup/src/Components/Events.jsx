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
      date: new Date("2024-01-08"),
      title: "Wiltshire follies by Jonathan Holt",
      details: "A tour of Wiltshire’s follies in their many forms",
    },
    {
      date: new Date("2024-02-05"),
      title: "Wiltshire gate lodges by James Holden",
      details: "The buildings that guard our grand country houses",
    },
    {
      date: new Date("2024-03-04"),
      title: "Extraordinary Wiltshire women by Ruth Butler",
      details:
        "A talk about a few of the many amazing women who shaped Wiltshire’s history",
    },
    {
      date: new Date("2024-04-08"),
      title: "Who does your DNA say you are? by Claire Mills",
      details: "How DNA testing can support family history research",
    },
    {
      date: new Date("2024-05-13"),
      title: "Buildings of England: Wiltshire by Julian Orbach",
      details: "Writing the latest revision of Pevsner’s guide",
    },
    {
      date: new Date("2024-06-03"),
      title: "The History of Calne by Claire Mills",
      details: "Claire kindly stood in at the last minute as the planned speaker could not make it",
    },
    {
      date: new Date("2024-10-07"),
      title: "A history of Shaw and Whitley by Peter Richardson",
      details: "A local historian talks about a local subject",
    },
    {
      date: new Date("2024-11-04"),
      title: "The darker side of Wiltshire by Claire Mills",
      details: "Featuring the worst it has to offer!",
    },
    {
      date: new Date("2024-12-02"),
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
      <h2> 2024 Programme</h2>
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
