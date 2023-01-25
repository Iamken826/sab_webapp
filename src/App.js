import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import User from "./components/pages/User";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path="/user" component={User}/>
      {/* <Route exact path='/' element={<Services/>} /> */}
      {/* <Route path='/' exact component={Home} /> */}
        {/* <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} /> */}
        </Routes>
    </Router>
  </>
  );
}

export default App;
