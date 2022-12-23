import React, { Component } from 'react';
import "./style2.css";

function Box2(props) {
    const {setjoin}=props;
    const handleLogoClick=()=>{setjoin(true)}
    return <>
        <div className="Box">
            <div className='title'  onClick={handleLogoClick}><img src={require("./title.png")} alt="" /></div>
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