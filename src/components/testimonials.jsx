import React , { useState, useEffect } from 'react';
import './assets/css/main.css';
import img1 from './images/test1.jpeg';
import img2 from './images/test2.jpeg';
import img3 from './images/test3.jpeg';


function Testimonials(){
    return(
        <section className="mb-0 pt-5 pb-5 wrapper container">
        <div className="inner">
            <div className="testimonials">
                <section className="wow animate__slideInLeft" data-wow-duration="1.5s">
                    <div className="content">
                        <blockquote>
                            <p className="testimonial-text">I feel SoChem is what that knits this huge department of ours together. 
                             It gave me a chance to bond with seniors,
                             learn so much from them, and so did our juniors. At SoChem, we came together, had fun, learned, and grew :)</p>
                        </blockquote>
                        <div className="author">
                            <div className="image">
                                <img src={img3} alt="" />
                            </div>
                            <p className="credit">- <strong>Shravani Eleswarapu</strong> <span>Batch of 2019</span></p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="content">
                        <blockquote>
                            <p className="testimonial-text">The best thing about SoChem is 
                            it gives you the feeling of a family away 
                            from home, and adds to your personal and professional growth at the same time!</p>
                        </blockquote>
                        <div className="author">
                            <div className="image">
                                <img src={img1} alt="" />
                            </div>
                            <p className="credit">- <strong>Ayush Chakraborty</strong> <span>Batch of 2020</span></p>
                        </div>
                    </div>
                </section>
                <section className="wow animate__slideInRight" data-wow-duration="1.5s">
                    <div className="content">
                        <blockquote>
                            <p className="testimonial-text">Having a culture within department is one of the key things, 
                            people often miss out on. Not only does SoChem maintains the legacy, it also ensures that every 
                            batch is better equipped than their senior ones.</p>
                        </blockquote>
                        <div className="author">
                            <div className="image">
                                <img src={img2} alt="" />
                            </div>
                            <p className="credit">- <strong>Sushant Kumar Sinha</strong> <span>Batch of 2020</span></p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
    );
}
export default Testimonials;
