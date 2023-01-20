import React from 'react';
import {useNavigate} from "react-router-dom";
import './App.css';

function LandingPage(){
    const navigate = useNavigate();
    const postview= ()=>{
        navigate('/postview');
    }
    return (
        <>
        <div className='landing-container'>
            <div>
                <img src='image2.jpg' alt='no data found'></img>
            </div>
            <div>
                <div><h1>10x Team 02</h1></div>
                <button onClick={()=>postview()}>Enter</button>
            </div>
        </div>
        </>
    );
}
export default LandingPage;