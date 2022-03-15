import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import Main from "./main/Main";
import Skills from "./skils/Skills";
import Works from "./Works/Works";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import {Job} from "./Job/Job";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Job/>
            <Footer/>
        </div>
    );
}

export default App;
