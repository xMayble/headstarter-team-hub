import React from 'react';
import Calendar from './Components/Calendar';
import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </AuthContextProvider>
      <Calendar />
    </div>
  )
};

export default App;
