import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes path='/' exact component={<Home/>}/>
          <Routes path='/services' component={<Services/>} />
          <Routes path='/products' component={<Products/>} />
          <Routes path='/sign-up' component={<SignUp/>} />
      </Router>
    </>
  );
}

export default App;
