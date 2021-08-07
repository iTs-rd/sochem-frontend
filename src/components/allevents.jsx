import React, { useState, useEffect } from 'react';
import './allevents.css';
import Footer from './footer';
var FontAwesome = require('react-fontawesome');


function Allevents(props) {

    return (
        <div>
            <div className="row mt-5 p-3">
                {props.eventlist.map( (evt, index) => {
                    return (
                        <a href={`events/${evt.title.toLowerCase()}`} className="col-12 col-sm-6 col-md-4 mb-5 bg-light p-4 zoom">
                                <span>
                                    <span>
                                        <img src={evt.cover1} class="img-fluid"></img>
                                    </span>
                                    <div>
                                        <div className="event-title-all">{evt.title}</div>
                                        <div className="event-info-all"><FontAwesome name="map-marker"/> {evt.venue}</div>
                                        <div className="event-info-all"><FontAwesome name="calendar"/> {evt.date}</div>
                                    </div>
                                </span>
                        </a>
                    );
                })}
            </div>
        </div>
    )
}

export default Allevents;
