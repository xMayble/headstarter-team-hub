import React, { useState } from 'react';

// Define a functional component for the form
const Form = () => {
    // using the useState hook to manage the state of the form
    // Initialize the state for the start time with an empty string
    const [startTime, setStartTime] = useState('');
    // Initialize the state for the end time with an empty string
    const [endTime, setEndTime] = useState('');
    // Initialize the state for the date with an empty string
    const [date, setDate] = useState('');

    // Event handler for when the form is submitted 
    const handleSubmit = (event) => {
        // Prevent the default form submit behavior
        event.preventDefault();
        // logic to add the event to the calendar goes here
    };

    return (
        // Render the form with the onSubmit event handler
        <form onSubmit={handleSubmit}>
            {/* Render a label and input for the start time */}
            <label>
                Start Time:
                <input type="text" value={startTime} onChange={(event) => setStartTime(event.target.value)} />
            </label>
            {/* Add a line break */}
            <br />
            {/* Render a label and input for the end time */}
            <label>
                End Time:
                <input type="text" value={endTime} onChange={(event) => setEndTime(event.target.value)} />
            </label>
            {/* Add a line break */}
            <br />
            {/* Render a label and input for the date */}
            <label>
                Date:
                <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
            </label>
            {/* Add a line break */}
            <br />
            {/* Render a submit button */}
            <button type="submit">Add Event</button>
        </form>
    );
};

// Export the form component for use in other files
export default Form;