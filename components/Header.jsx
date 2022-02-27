import React from 'react';
import { HomeCarousel } from '.';

const Header = ({emailErr, emailSuccess, SubscribeEmail, onSubscribeClick, thumbnails}) => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">CS Voyager</h1>
        <p>A MONTHLY NEWSLETTER AIMING TO MAKE EVERYONE AWARE ABOUT REVOLUTIONIZING CS TECHNOLOGIES</p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" ref={SubscribeEmail} />
        <button type="button" onClick={onSubscribeClick}>Subscribe</button>
        <br/>
      </div>
        <span>{emailErr ? emailErr : emailSuccess ? emailSuccess : <br/>}</span>
    </div>

    <div className="gpt3__header-image">
      {/* <img src="/img/logo.png" /> */}
      <HomeCarousel thumbnails={thumbnails}/>
    </div>
  </div>
);

export default Header;