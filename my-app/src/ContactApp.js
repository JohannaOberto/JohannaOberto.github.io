import linkedinlogo from './assets/linkedin-logo1.png';
import githublogo from './assets/github-logo1.png';
import './style/ContactApp.css';

function ContactApp(props) {
  return (
    <div>
      <h1>Get in touch:</h1>
      <div className='icons'>
        <a href="https://www.linkedin.com/in/johanna-oberto-0874499b/">
          <img className='linkedin-logo' src={linkedinlogo} width="20%" height="20%" />
        </a>
        <a href="https://github.com/JohannaOberto">
          <img className='github-logo' src={githublogo} width="20%" height="20%"/>
        </a>
      </div>
    </div>
  );
}

export default ContactApp;