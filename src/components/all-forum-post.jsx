import React, { useState, useEffect } from 'react';
import './forum-home.css';
import API from '../api-service';
import { useCookies } from 'react-cookie';
import Moment from 'moment';
var FontAwesome = require('react-fontawesome');


function AllForumPosts(props){

    const [userDetails, setUserDetails] = useState(null);
     useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/user-extension?id=${props.post.author}`, {
            method: 'GET',
            headers: {
              'Authorization': `Token ${props.token['mr-token']}`
            }
          }).then( resp => resp.json())
          .then( res => setUserDetails(res))
          .catch( error => console.log(error))
     }, [])

    return (
            <div className="ml-0">
                <div className="jumbotron p-2 mb-1 mt-1" id="heading-forum-post">
                    <div className="text-light" style={{fontSize:'1.5rem'}}>{props.post.heading}</div>
                    <span className="text-light">
                        {userDetails && userDetails.length &&  <img id="comment-user-image" src={userDetails[0].profile_photo}/>} 
                        {props.user && props.post.author_name}
                    </span>
                    <span className="ml-5 text-light"> <FontAwesome name="clock"/> {Moment(props.post.date).format('hh:mm  DD-MM-YYYY')}</span>
                </div>
                <div className="jumbotron p-2 mb-2 all-forum-post-text">
                    <span dangerouslySetInnerHTML={{ __html: props.post.body }} />
                </div>
            </div>
    );
}

export default AllForumPosts;