import React, { useState, useEffect } from 'react';
import Comment from './forum-comment';
import AllForumPost from './all-forum-post';
import Navbar from './navbar';
import './forum-home.css';
import Form from './forum-form';
import { useCookies } from 'react-cookie';
import Footer from './footer';
var FontAwesome = require('react-fontawesome');


function Forum(){

    const [posts, setPosts] = useState([]);
    const [showComment, setShowComment] = useState(null);
    const [user, setUser] = useState();
    const [token, setToken] = useCookies(['mr-token']);
    const [showNewPost, setShowNewPost] = useState(false);
     useEffect(()=>{
         
        fetch('https://api.sochem.org/api/forum-post/', {
            method: 'GET',
            headers: {
              'Authorization': `Token ${token['mr-token']}`
            }
          }).then( resp => resp.json())
          .then( res => {
              setPosts(res);
            })
          .catch( error => console.log(error));

          fetch('https://api.sochem.org/api/user-from-token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`,
            },
            body: JSON.stringify({
                'token': `${token['mr-token']}`,
            })
            }).then( resp => resp.json()).then(res => setUser(res))
            .catch( error => console.log(error));
          
    }, []);
    
    useEffect( () => {
        if(!token['mr-token']) window.location.href = '/login';
    },[token])


    
    const toggleComment = id =>{

        if(showComment===id) setShowComment(null);
        else setShowComment(id);
    }
    const cancelClicked = () =>{
        setShowNewPost(false);
    }
    const addPost = post =>{
        setPosts([post, ...posts]);
    }
    return (
        <div>
            <Navbar/>
            
            <div className="jumbotron text-center cont-home-sochem">
                <h1 className="jumbotron-heading-top">SoChem Forum</h1>
            </div>
             

            <div className="container ">

                <div className="row">
                    <div className="col-md-4 col-0 pt-1">
                        <Form setPosts={setPosts} posts={posts} setShowNewPost={setShowNewPost} cancelClicked={cancelClicked} addPost={addPost}/>
                    </div>
                    <div className="col-md-12 col-12 body-font">
                        {posts.length===0 ? <h1 style={{marginTop:300, marginLeft:150}}>No post to show :(</h1> : null}
                        {posts.map((post, index) => {
                            return (
                                <div className="border mt-4 rounded p-2 bg-light ml-0" key={post.id}>
                                    <AllForumPost post={post} user={user} token={token}/>
                                    <span className="mb-5">
                                    <h3 className="text-warning" onClick={()=>toggleComment(post.id)}><FontAwesome name="comment"/>
                                        <a href="#"><span className="ml-2 text-dark">{showComment==post.id ? <FontAwesome name="arrow-up"/> : <FontAwesome name="arrow-down"/>}</span>
                                        </a>
                                    </h3>
                
                                    {showComment==post.id ? <Comment postId={post.id} user={user} allowAdd={true}/> : null}
                                    </span>
                                    
                                </div>   
                            );
                        })}
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        

    );
}

export default Forum;
