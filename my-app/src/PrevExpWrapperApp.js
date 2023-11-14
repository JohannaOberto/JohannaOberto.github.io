import PrevExpApp from "./PrevExpApp";

/*
 * Json object passed to wrapper, holds array of previousExperience
 * iterate over each experience and create a new component with the info
 */
function PrevExpAppWrapper(props) {
  return (
    <div>
      <h1>Experience:</h1>
      {props.prevExpJson.previousExperience.map(prevExp => PrevExpApp(prevExp))}
    </div>
  );
}

export default PrevExpAppWrapper;