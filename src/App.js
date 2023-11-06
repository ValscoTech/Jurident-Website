
import './App.css';
import React from 'react'

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from './Screens/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Login from './Screens/Loginscreen/Login/Login';
import Register from './Screens/Registerscreen/Register/Register';
import Details from './Components/ProfilePage/Details';
import AboutUs from './Components/ProfilePage/AboutUs';
import TermsAndCondition from './Components/ProfilePage/TermsAndCondition';
import ChangePassword from './Components/ProfilePage/ChangePassword';
import Cases from './Screens/Cases/Cases';

const App = () => {
  return (
    <Router>
				<Navbar/>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />

          <Route path="/Profile" element={<Details />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/TermsAndCondition" element={<TermsAndCondition/>} />
        <Route path="/ChangePassword" element={<ChangePassword/>} />
    
        <Route path="/Services" element={<Cases/>} />
          </Routes>
          </Router>
  )
}

export default App