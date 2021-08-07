import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Anevent from './anevent';
import Allevents from './allevents';
import Footer from './footer';
import './events.css';

import API from '../api-service'; 
import { useCookies } from 'react-cookie';

function Events() {
    
    const [ eventlist, setEventlist] = useState([]);
    const [ eventnum, setEventnum ] = useState(null);
    const [ token, setToken ] = useCookies(['mr-token']);

    const allEvents = () => {
        API.getEvents({'token':token['mr-token']})
           .then( resp => setEventlist(resp))
           .catch( error => console.log(error))
    }

    const eventSelected = (num) => {
        setEventnum(num);
    }

    useEffect( () => {
        if(!token['mr-token']) window.location.href = '/login';
        {allEvents()}
    },[token])
    
    return (
        <div>
            <Navbar/>
            <div class="container">
                {eventnum ?
                    eventlist.map( evt => {
                        return(
                            evt.id==eventnum ?
                            <Anevent event={evt}/>
                            : null
                        );
                    })
                :
                <div>
                    <Allevents eventlist={eventlist} eventSelected={eventSelected}/>
                </div>
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Events;
