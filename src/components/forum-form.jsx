import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Form(props){

    const [heading, setHeading] = useState('');
    const [body, setBody] = useState('');
    const [token, setToken] = useCookies(['mr-token']);
    
    const headingChanged = evt =>{
        setHeading(evt.target.value);
    }
    const bodyChaned = (evt, editor) =>{
        setBody(editor.getData());
    }
    const newPostToggle = () =>{
        props.setShowNewPost(true);
    }

    const submitClicked = () =>{
        fetch('https://api.sochem.org/api/forum-post/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`,
            },
            body: JSON.stringify({
                'heading': heading,
                'body': body,
            })
            }).then( resp => resp.json()).then(res => props.addPost(res))
            .catch( error => console.log(error))
        props.cancelClicked();
    }

    return (
        <div>
                {props.showNewPost ? null : <div id = "a" onClick={newPostToggle}><span>New Post</span>
                        <button id = "liquid" data-toggle="modal" data-target="#exampleModalCenter"></button></div>}
                        <div>
                            <div class="modal fade bd-example-modal-lg" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">New Forum Post</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                    <div className="container jumbotron mt-5">
                                        <form>
                                            <div className="form-group">
                                                <label for="title">Title</label>
                                                <input type="text" className="form-control" id="title" onChange={headingChanged} placeholder="Mention your query briefly."/>
                                            </div>
                                            <div className="form-group">
                                                <label for="body">Body</label>
                                                <CKEditor editor={ ClassicEditor }
                                                    
                                                 rows="6" type="text" className="form-control" id="body" onChange={bodyChaned}/>
                                            </div>
                                        </form>
                                    </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" onClick={submitClicked} class="btn btn-primary" data-dismiss="modal">Submit</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                <hr></hr>
        
        </div>
    );
}

export default Form;

