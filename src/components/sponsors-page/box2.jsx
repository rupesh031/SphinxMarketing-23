import React, { Component } from 'react';
import "./style2.css";

function Box2(props) {
    return <>
        <div className="Box">
            <div className='title'><img src={require("./title.png")} alt="" /></div>
            <div className='box-content'>
                <p>Choose who you are</p>
                <div className="btn2">
                    <button>ALUMINI</button>
                    <button>NON-ALUMINI</button>
                </div>
            </div>
        </div>
    </>;
}

export default Box2;