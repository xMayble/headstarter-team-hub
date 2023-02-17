import React, { useState } from 'react';
import Calendar from './Components/Calendar';
import logo from './logo.svg';
import './App.css';
import VideoCall from './Components/VideoCall';
import Form from './Components/calendarForm';

const App = () => {

  // a useState hook that is used to create the 'events' state variable and a 
  // 'setEvents' function to update that state variable
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <Calendar events={events} />
      <Form addEvent={addEvent} />
      <VideoCall />
    </div>
  );
};


export default App;
