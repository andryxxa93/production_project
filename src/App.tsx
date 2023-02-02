import React, {Suspense, useContext, useState} from 'react';
import Counter from "./components/Counter";
import './styles/index.scss';
import { Route, Routes, Link } from 'react-router-dom';
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const { toggleTheme, theme } = useTheme();

    const bool = true;

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync/>}/>
                    <Route path="/" element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
            <Counter />
        </div>
    );
};

export default App;
