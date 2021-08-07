import React, { useState, useEffect } from 'react';
import WOW from 'wowjs';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.css'
import './App.css';
import { useCookies } from 'react-cookie';
import Footer from './components/footer';
import logo from './components/sochemlogo.png';
import Moment from 'moment';
import bg from './components/images/image.jpg';
import Navbar from './components/navbar';
import Header from './components/header';
import { ListGroupItem } from 'react-bootstrap';
import Testimonials from './components/testimonials';
import Carousel from './components/caruosel';

var FontAwesome = require('react-fontawesome');

function App() {

  const [posts, setPosts] = useState([]);
  const [token, setToken] = useCookies(['mr-token']);

  useEffect(()=>{
    new WOW.WOW().init();
    if(token['mr-token']){
      fetch(`${process.env.REACT_APP_API_URL}/api/forum-post/`, {
          method: 'GET',
          headers: {
            'Authorization': `Token ${token['mr-token']}`
          }
        }).then( resp => resp.json())
        .then( res => {
            setPosts(res);
          })
        .catch( error => console.log(error));
    }
  },[])
  return (
    <div>
      <Navbar/>
      <div>
          <Header/>

          <div className="row container d-flex justify-content-around ml-auto mr-auto border bg-light pb-5"> 
            <div className="col-12 col-md-5  border rounded shadow px-4">
                <div className="rounded text-center p-1 m-0" style={{backgroundColor:'black'}}>
                  <h4 className="text-light home-updates-forum">Updates</h4>
                </div>
                {token['mr-token'] ?
                <div className="mt-4">
                <ul>
                <li className="home-updates mb-2"><span ><a href="https://docs.google.com/spreadsheets/d/1BpTjp9lKcgRu0ioZ8ob841Q92GV8m34osEBG0tppTdk/edit#gid=1810039578" id="home-update-a">List of Registered Students from First Year</a></span></li>
                <li className="home-updates"><span><a id="home-update-a" href="/events/case-study(first-year)">Case Study: Results out</a>.</span></li>
                </ul>
                </div> : <h4 className="text-secondary text-center mt-3">Login to view this section.</h4 >}
            </div>
            <div className="col-12 col-md-6 border rounded mt-3 mt-md-0 shadow px-4">
                <div className="rounded text-center p-1 mb-4" style={{backgroundColor:'black'}}>
                  <h4 className="text-light home-updates-forum">Latest post from Forum</h4>
                </div>
                {token['mr-token'] ?
                <div style={{fontSize:'1rem'}}>
                      {posts.map((post, index) => {
                          return (
                              <div className="alternate-bgcolor" className="m-4">
                                  {index<=5 ? 
                                    <span>
                                        <a onClick={() =>  window.location ='/forum'} href="#" className="home-forum-text"><FontAwesome name="comment"/> {post.heading}</a>
                                        <br/>
                                        <span  id="home-forum-name" className="text-secondary" style={{fontSize:20}}><FontAwesome name="user"/> {post.author_name}
                                        &nbsp;
                                        | &nbsp; <FontAwesome name="clock"/> {Moment(post.date).format('hh:mm DD-MM-YYYY')}
                                        </span>
                                    </span> : null}
                              </div>
                          );
                      })}
                </div>
                :
                <h4 className="text-secondary text-center m-3">You need to login to view this section.</h4 >}
            </div>
          </div>
      </div>
      <div className="container text-center about-us-div">
              <h2 className="about-us">About Us</h2>
              <p className="home-about-text wow animate__zoomIn">
              The Society of Chemical Engineers a.k.a SoChem is a society run by the students of the department for the students of the department.
               SoChem ensures that each and every student within the department gets the most out of their time with us at IIT(BHU) Varanasi.
                      <br></br>
              From fancy festival dinners, important job finding, and everything in-between, SoChem is there to give a helping hand. 
              As a society, we are incredibly active with respect to social skill development and industrial exposure.
                      <br></br>
                  <br></br>
              Name the festival, we host a celebratory event for it! 
              It is the perfect opportunity to celebrate with your friends! This provides for a chance to mingle with representatives 
              across all the years within the department. These events are a chance for you to do some networking and have fun. 
              <br></br>
              <br></br>
              The society as a whole has strong links with various industries in the engineering and financial sectors.
              The society organizes presentations from company representatives and application days, held within the department
              itself, directly aimed at chemical engineering students.
                      <br></br>
                In addition to all the events, we host many sessions for students of all years (Bachelor's to PhD) to equip them with the
                 skills necessary to climb the ladder in whichever domain they wish to excel in. 

              </p>
          </div>
      <Testimonials/>
      <Carousel/>
      <Footer/>

    </div>
  );
}

export default App;
