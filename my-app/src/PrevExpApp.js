import './style/PrevExpApp.css';

function PrevExpApp(props) {
  return (
    <div id={props.id} className='previous-experience-panel'>
      <h2>{props.title}</h2>
      <p>{props.experience}</p>
    </div>
  );
}

export default PrevExpApp;
