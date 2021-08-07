import React , { useState, useEffect } from 'react';
import logo from './sochemlogo.png';
import './header.css';
import bg from './images/image.jpg';
var FontAwesome = require('react-fontawesome');

function Header(){

    return (
        <div className="home-header">
            <div className="col-12 col-md-12 text-center">
                <img src={logo} style={{width:200, height:200}}/>
            </div>
            <div className="text-center" style={{marginTop:'10rem'}}>
                <div>
                        <span id="sochem-home-heading" > The Society of Chemical Engineers
                        </span>
                </div>
            </div>
        </div> 
    );

}
export default Header;