import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import SevenDayNotice from './pageimg/SevenDayNotice.png';
import './SevenDays.css';
import SevenDaysCard from './components/SevenDaysCard';

const LoginPage = () => {
    return (
        <>
        <Header/>
        <br/><br/><br/>
        <div class="notice"><img alt="notice"src={SevenDayNotice} /></div>
        <br/><br/><br/>
        <SevenDaysCard/>
        </>
    );
};

export default LoginPage;