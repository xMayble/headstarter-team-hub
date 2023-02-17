import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
    // using the useState hook in React to manage the state of the 'Calendar'..
    // ..component, returns an array with two elements: the current state value, and 
    // a function to update the state value
    const [events, setEvents] = useState([]);

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

export default Calendar;