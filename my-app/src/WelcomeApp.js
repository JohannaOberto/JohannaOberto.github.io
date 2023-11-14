import './style/WelcomeApp.css';

function WelcomeApp(props) {
  return (
    <div className='welcome-text-container'>
      <h1>Hello and Welcome! I am <span className='highlight-text'>Johanna Oberto</span>,
      a Web Developer interested in pursuing
      a career in creative and <span className='highlight-text'>interactive technologies</span>.</h1>
    </div>
  );
}

export default WelcomeApp;