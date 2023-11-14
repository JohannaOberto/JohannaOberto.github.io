import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import WelcomeApp from './WelcomeApp';
import ContactApp from './ContactApp';
import PrevExpAppWrapper from './PrevExpWrapperApp';
import previousExperienceJson from './prevExp.json';

const data = previousExperienceJson;

const welcome = ReactDOM.createRoot(document.getElementById('welcome'));
welcome.render(
  <div className='welcome-container'>
    {<WelcomeApp />}
  </div>
);

const contact = ReactDOM.createRoot(document.getElementById('contact'));
contact.render(
  <div>
    {<ContactApp />}
  </div>
);

const experience = ReactDOM.createRoot(document.getElementById('experience'));
experience.render(
  <div>
    {<PrevExpAppWrapper prevExpJson={data} />}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
