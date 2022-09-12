import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutMe} from "../Menu/AboutMe/AboutMe";
import {Portfolio} from "../Menu/Portfolio/Portfolio";
import {Contacts} from "../Menu/Contacts/Contacts";

export const PATH = {
    ABOUT: '/about',
    PORTFOLIO: '/portfolio',
    CONTACTS: '/contacts',
}

export const Navigates = () => {
    return (
        <div>
            <Routes>
                <Route path={PATH.ABOUT} element={<AboutMe/>}/>
                <Route path={PATH.PORTFOLIO} element={<Portfolio/>}/>
                <Route path={PATH.CONTACTS} element={<Contacts/>}/>
            </Routes>
        </div>
    );
}

