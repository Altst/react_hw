import './Nasa.css';

function Nasa({image}) {
  return (
    <div className="container">
        <img src={image} alt="img"/>
    </div>
  );
}

export default Nasa;
