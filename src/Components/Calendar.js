import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
    // using the useState hook in React to manage the state of the 'Calendar'..
    // ..component, returns an array with two elements: the current state value, and 
    // a function to update the state value
    const [events, setEvents] = useState([
        // an array of objects that represents the initial state of 
        // the events in the Calendar component.
        // Each object in the array has two properties: title and date. 
        // The title property is a string that represents the title of an event, 
        // and the date property is a string that represents the date of the event in 
        // the format YYYY-MM-DD.
        { title: 'Event 1', date: '2023-02-01' },
        { title: 'Event 2', date: '2023-02-02' },
        { title: 'Event 3', date: '2023-02-03' },
    ]);

    return (
        // a third-party component that provides a customizable and user-friendly calendar display, 
        // and it is being used to display the events stored in the component's state.
        <FullCalendar
            // an array that includes the dayGridPlugin, 
            // which provides the day grid view for the calendar. 
            plugins={[dayGridPlugin]}
            // The initialView prop sets the initial view of the calendar to "dayGridMonth", 
            // which displays the calendar in a monthly view with each day in a grid format.
            initialView="dayGridMonth"
            // The events prop is passed the events state from the component, 
            // which is an array of objects representing 
            // the events to be displayed on the calendar.
            events={events}
        />
    );
};