import React, { useState, useEffect } from 'react';
import AllComemnts from './all-comments';
import './forum-home.css';
import API from '../api-service';
import { useCookies } from 'react-cookie';
var FontAwesome = require('react-fontawesome');


function Comment(props){
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [token, setToken] = useCookies(['mr-token']);
    const [userDetails, setUserDetails] = useState(null);
    useEffect(()=>{
        fetch(`https://api.sochem.org/api/forum-comment?post_id=${props.postId}`, {
            method: 'GET',
            headers: {
              'Authorization': `Token ${token['mr-token']}`
            }
          }).then( resp => resp.json())
          .then( res => setComments(res))
          .catch( error => console.log(error))
    }, []);

    const newCommentChanged = evt =>{
        setNewComment(evt.target.value);
    }
    const postNewComment = () =>{
        
        API.newComment({'comment':newComment, 'post_id':props.postId}, {'token':token['mr-token']})
        .then(res => setComments([res,...comments]))
            .catch( error => console.log(error))

        setNewComment('');
            
    }
    return(
        <div>
            {comments.map(comment => {
                return(
                    <AllComemnts comment={comment} token={token}/>
                );
            })}
        {props.allowAdd ? 
            <form className="form-inline">
                <div className="mt-2 mr-2 mb-2">
                    <input id="newComment" type="text" value={newComment} className="form-control" onChange={newCommentChanged}/>
                </div>
                <h2 onClick={postNewComment} className="btn btn-primary mt-2 mb-2 p-1">Comment</h2>
            </form>
        : null}

        </div>
    );

}

export default Comment;

