import React from 'react';
import Calendar from './Components/Calendar';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Protected from './Components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';

const App = () => {
  return (
    <div>
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
  )
};

export default App;
