import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Navbar from './navbar';
import { useReducer } from 'react';
import './people-block.css';
var FontAwesome = require('react-fontawesome');


function PeopleBlock(props){

    const [token, setToken] = useCookies();
    const [user, setUser] = useState({});
    const [userDetails, setUserDetails] = useState({});
    useEffect(() => {

        fetch(`${process.env.REACT_APP_API_URL}/api/users/${props.user_id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`,
            }
            }).then( resp => resp.json()).then(res => setUser(res))
            .catch( error => console.log(error))

        fetch(`${process.env.REACT_APP_API_URL}/api/user-extension?id=${props.user_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`,
            }
            }).then( resp => resp.json()).then(res => setUserDetails(res))
            .catch( error => console.log(error))
    }, [])

    return(
        <div className="bg-light p-2" onClick={() => props.setShowDetails(user)}>
            <a href="#"> 
            <h5>
            <div className="row people-block-text">
                <div className="col-md-4 col-12">{userDetails && userDetails.length && <img id="comment-user-image" src={userDetails[0].profile_photo}/>}
                {user.first_name} {user.last_name}</div>
                <div className="col-md-2 col-12 mt-4 mt-md-0">{userDetails && userDetails.length && userDetails[0].batch}</div>
                <span className="col-md-6 col-12">{user.email}</span>
            </div>
            </h5>
            <hr/>
            </a>
        </div>
    );
}

export default PeopleBlock;