import './User.css';

function User({ desription, photo, price }) {
  return (
    <div className="container">
      <div className='popular'>POPULAR</div>
      <div className='main'>
        <div className='main-left'>
          <div className='desription'>{desription}</div>
          <div className='price'>{price}</div>
          <div className='buy'>Купити</div>
        </div>
        <div className='main-right'>
          <img className='photo' src={photo} alt="cat"></img>
        </div>
      </div>
    </div>
  );
}

export default User;
