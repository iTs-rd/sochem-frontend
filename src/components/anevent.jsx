import React, { useState, useEffect } from 'react';
import API from '../api-service'; 
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Navbar from './navbar';
import Footer from './footer';
var FontAwesome = require('react-fontawesome');

function Anevent() {

    const { title } = useParams();
    const [ token, setToken ] = useCookies(['mr-token']);
    const [ eventlist, setEventlist] = useState([]);
    const [ event, setEvent] = useState([]);

    const allEvents = () => {
        API.getEvents({'token':token['mr-token']})
           .then( resp => setEvent(resp.find( ev => ev.title.toLowerCase() === String(title))))
           .catch( error => console.log(error))
    }

    useEffect( () => {
        if(!token['mr-token']) window.location.href = '/login';
        allEvents()
    },[token])

    return (
        <div>
            <Navbar/>
        <div className="container">
            { event ? 
            <div className="container-fluid jumbotron pt-4 bg-light">
              <div id="anevent-title">{event.title}</div>
              <hr></hr>
              <h4 className="event-info-all"><FontAwesome name="map"/> {event.venue} &nbsp;
              <FontAwesome name="calendar"/> {event.date}</h4>
              <br/>

              <div class="container">
                <div class="row">
                    {event.cover1 && 
                        <div className="col-12">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            {event.cover2 && 
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            }
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active text-center">
                            <img src={event.cover1} class="img-fluid img-events-cov"  alt="..."/>
                            </div>
                            {event.cover2 &&
                            <div class="carousel-item text-center">
                            <img src={event.cover2} class="img-fluid img-events-cov" alt="..."/>
                            </div>
                            }
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                        </div>
                        </div>
                    }
                    <div className="col-12 mt-5">
                       <span className="event-body-an anevent-desc"><div dangerouslySetInnerHTML={{ __html: event.description }}/></span>
                       <h6>{event.file1 &&
                                <a href={event.file1}>Download PS</a>
                        }</h6>
                    </div>
                    <hr></hr>
                </div>
              </div>

            </div>
            :
            <h1>Event doesn't exist</h1>
            }
        </div>
        <Footer/>
        </div>
    )
}

export default Anevent;
