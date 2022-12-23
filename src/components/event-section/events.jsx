import React, { Component } from 'react';
import Navbar from '../../common/navbar/navbar';
import './events.css';

function Events() {
    return <div className='event-bg'>
        <Navbar/>
        {/* <div className="floating-group">
            <img src={require("./floating.png")} id='floating1' alt="" />
            <img src={require("./floating.png")} id='floating1' alt="" />
            <img src={require("./floating.png")} id='floating1' alt="" />
            <img src={require("./floating.png")} id='floating1' alt="" />
            <img src={require("./floating.png")} id='floating2' alt="" />
            <img src={require("./floating.png")} id='floating2' alt="" />
            <img src={require("./floating.png")} id='floating2' alt="" />
            <img src={require("./floating.png")} id='floating2' alt="" />
            <img src={require("./floating.png")} id='floating3' alt="" />
            <img src={require("./floating.png")} id='floating3' alt="" />
            <img src={require("./floating.png")} id='floating3' alt="" />
            <img src={require("./floating.png")} id='floating3' alt="" />
            <img src={require("./floating.png")} id='floating4' alt="" />
            <img src={require("./floating.png")} id='floating4' alt="" />
            <img src={require("./floating.png")} id='floating4' alt="" />
            <img src={require("./floating.png")} id='floating4' alt="" />
        </div> */}
        <div className='events-main'>
            <div className='rectBox'></div>
            <div className='event-content'>
                <div className="event-logo">
                    <img src={require("./logo.png")} alt="" />
                </div>
                <div className="desc">
                    <p>Lorem ipsum dolor sit amet consectetur. Dui sagittis cursus amet quis. Sollicitudin et id nibh commodo cursus id. Ut feugiat arcu metus iaculis senectus.</p>
                </div>
                <div className="btns">
                    <div className="btns1"><button>Join Tech Events<span className='arrow-icon'><img src={require("./arrow-icon.png")} alt="" /></span></button></div>
                    <div className="btns2"><button>Watch Video <span className='yt-icon'><img src={require("./yt-icon.png")} alt="" /></span></button></div>
                </div>
                <div className="card-group">
                    <img src={require("./card.png")} alt="" />
                    <img src={require("./card.png")} alt="" />
                    <img src={require("./card.png")} alt="" />
                </div>
            </div>
            <div className='rectBox2'></div>
        </div>
    </div>;
}

export default Events;