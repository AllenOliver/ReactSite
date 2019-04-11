import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';
import HeadSection from './Sections/HeadSection';
import MidSection from './Sections/MidSection';
import EndSection from './Sections/EndSection';
import SocialSection from './Partials/SocialSection';


import Header from './Header';

ReactDOM.render(<Header />, document.getElementById('header'));


const sectionOne = <HeadSection text="Welcome to Cehpalomania Games!" id="headSection" />
ReactDOM.render(sectionOne, document.getElementById('bodySectionOne'));

const sectionTwo = <MidSection text="We are a company developing retro inspired titles, with modern attitude!" id="midSection" />
ReactDOM.render(sectionTwo, document.getElementById('bodySectionTwo'));

ReactDOM.render(<EndSection />, document.getElementById('bodySectionThree'));

ReactDOM.render(<Footer />, document.getElementById('footer'));

ReactDOM.render(<SocialSection />, document.getElementById('social'));
ReactDOM.render(<SocialSection />, document.getElementById('socialHeader'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
