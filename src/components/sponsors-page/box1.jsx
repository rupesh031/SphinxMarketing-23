import React, { Component } from 'react';
import "./style2.css";

function Box1(props) {
    return <>
        <div className="Box">
            <div className='title'><img src={require("./title.png")} alt="" /></div>
            <div className='box-content'>
                <p>Help us in our journey to create a fantastic event full of <span style={{color:"gold"}}>Technology</span></p>
                <p style={{ marginTop: "40px" }}>Want to be part of our journey?</p>
                <div className="btn">
                    <button>JOIN US</button>
                </div>
            </div>
        </div>
    </>;
}
// const el=addEventListener(document.querySelector(".btn>button"));


export default Box1;