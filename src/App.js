import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactMe from "./components/ContactMe/ContactMe";
import Navbar from "./components/NavBar/Navbar";

    function App() {
        return (
            <div>
            <Navbar />
            <Home />
            <Portfolio />
            <ContactMe />
            </div>
        )
    }

export default App;