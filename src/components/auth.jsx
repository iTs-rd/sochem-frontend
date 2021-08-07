import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Navbar from './navbar';
import Comment from './forum-comment';
import Footer from './footer';
import EditBio from './edit-bio';
import './auth.css';
import '../components/profile.css';
import {GoogleLogin} from 'react-google-login';
var FontAwesome = require('react-fontawesome');


const client_id = '583451575044-i4kah52p22nlhsv1e6nstfknr1sa1qod.apps.googleusercontent.com';

function Login(){

    const [token, setToken ] = useCookies(['mr-token']);
    const [errorMessage, setErrorMessage] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const setReceivedToken = res =>{
        if(res.hasOwnProperty('error')){
            setShowLoader(false);
            setErrorMessage(res.error);
        }
        else{
            setToken('mr-token', res.token);
            window.location.href = '/';
        }
    };
    const onFailure = res =>{
	    console.log(res);
    }

    const onSucces = (res) =>{
        setShowLoader(true);
        fetch('https://api.sochem.org/api/logup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'token': `${res.tokenObj.id_token}`,
            })
            }).then( resp => resp.json()).then(res => setReceivedToken(res))
            .catch( error => console.log(error))         
    };
    return(
        <div>
            <Navbar/>
            <div className="jumbotron mb-5 bg-dark">
                <h1 className="text-center text-light">SoChem Login</h1>
            </div>
            <div className="container text-center border shadow p-5 mt-5">
                <GoogleLogin
                        clientId={client_id}
                        buttonText="Login with Google"
                        onSuccess={onSucces}
	    		onFailure={onFailure}
                        id="google-login-button"
                />
                {showLoader && <div class="loader"></div>}
                <h2 className="mt-5 text-secondary"><FontAwesome name="info-circle"/> Login only with your Institute account.</h2>
                <h3 className="text-danger mt-5">{errorMessage}</h3>
            </div>
        </div>
    );
}
export default Login;
