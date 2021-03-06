import React from 'react';
import Feature from './Feature';

const About = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <h1 className='text-center text-3xl mb-20 font-bold uppercase' data-aos="zoom-out">About Us</h1>
    <div className="gpt3__whatgpt3-feature" data-aos="fade-left">
      <div className="gpt3__features-container__feature" data-aos="fade-up">
        <div className="gpt3__features-container__feature-title">
          <img src='/img/About.webp' alt="About" style={{maxWidth: '500px'}}/>
        </div>
        <div className="gpt3__features-container_feature-answer">
          <div className='mx-5'/>
          <h1 style={{fontSize: '2rem', lineHeight: '2.5rem'}} className="mx-5">What is CS Voyager?</h1>
          <p style={{fontSize: '1.5rem', lineHeight: '1.7rem'}} className="mx-5">&quot;CS Voyager&quot; is a monthly newsletter which will keep you updated with the latest happenings around the globe in the field of Computer Science & will provide focused knowledge specifically designed for CS enthusiasts. Just like a person who goes on voyages, our newsletter is on its voyage & shall explore a different part of CS and this evolving Technology era & present them in front of the reader.&quot;</p>
        </div>
      </div>
    </div>
    <div className="gpt3__whatgpt3-heading" data-aos="zoom-in">
      <h1 className="gradient__text">Our aim is to bring awareness and motivation among the individuals to explore the field of Computer Science</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="NEWS AND LATEST HAPPENINGS" text="You will get the latest info about fascinating thing which has happened or is going to happen, in the field of CS around the globe recently." />
      <Feature title="PROGRAMMING TIPS & TRICKS" text="You will be given few coding tips & tricks every month to improve the execution of your coding skills & may be to show off your friends 😝" />
      <Feature title="FUN GAMES & CODEJAMS" text="Bored..? So here we are with some cool games through which you can relax yourself along in your journey of learning & exploring CS & CodeJams will help you to compete with your fellow learners to know your standings at the national level." />
      <Feature title="FASCINATING STORIES & ACTIVITIES" text="Stories About incidents that have happened recently in the field of CS, sometimes funny sometimes scandalous, which will make you a CS-Aware citizens & Fun activites will keep your motivation high to keep learning in this field." />
    </div>
  </div>
);

export default About;