import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';


// Define a functional component for the form
const Form = (props) => {
    // using the useState hook to manage the state of the form
    // Initialize the state for the start time with an empty string
    const [start, setStart] = useState('');
    // Initialize the state for the end time with an empty string
    const [end, setEnd] = useState('');
    // Initialize the state for the date with an empty string
    const [date, setDate] = useState('');

    // Event handler for when the form is submitted 
    const handleSubmit = (event) => {
        // Prevent the default form submit behavior
        event.preventDefault();
        // logic to add the event to the calendar goes here

        // create a new event object with the information from the form
        const newEvent = {
            title:  `Event from ${start.format('h:mm a')} to ${end.format('h:mm a')}`,
            start: start.toDate(),
            end: end.toDate()
        };

        // Pass the new event to the addEvent function, which is a prop passed in from the parent component
        props.addEvent(newEvent);

        // Reset the form values
        setStart('');
        setEnd('');
        setDate('');
    };

    return (
        // Render the form with the onSubmit event handler
        <form onSubmit={handleSubmit}>
         
            <label>
                Start Time:
                <Datetime value={start} onChange={setStart} dateFormat="YYYY-MM-DD" timeFormat="HH:mm" />
            </label>
            <br />
            <label>
                End Time:
                <Datetime value={end} onChange={setEnd} dateFormat="YYYY-MM-DD" timeFormat="HH:mm" />
            </label>
            <br />
            <label>
                Date:
                <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
            </label>
            <br />
            <button type="submit">Add Event</button>
        </form>
    );
};

// Export the form component for use in other files
export default Form;