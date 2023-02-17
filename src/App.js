import React, { useState } from 'react';
import Calendar from './Components/Calendar';
import logo from './logo.svg';
import './App.css';
import VideoCall from './Components/videoCall';
import Form from './Components/calendarForm';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Protected from './Components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';

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
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/account' element={<Protected><Account /></Protected> } />
        </Routes>
      </AuthContextProvider>
      <Calendar />
    </div>
  );
};


export default App;
