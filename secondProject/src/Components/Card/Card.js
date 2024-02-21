import './Card.css';

function App() {
  return (
    <div className="container">
      <div className='text-phone'>Адаптив под телефон</div>
      <div className='text-tablet'>Адаптив под планшет</div>
      <div className='text-tv'>Адаптив под телевизор</div>
      <div className='card-top'>
        <div className='card-top-left'>-16%</div>
        <div className='card-top-right'>
          <div className='heart-icon'><i class="fa-regular fa-heart fa-xl"></i></div>
          <div className='scales-icon'><i class="fa-solid fa-scale-balanced fa-xl"></i></div>
        </div>
      </div>
      <div className='card-main'>
        <img src='https://content.rozetka.com.ua/goods/images/big/381714257.jpg' alt='coins'></img>
      </div>
      <div className='card-description'>
        <div className='card-title'>Набір монет України ЗСУ "ППО - надійний щит"</div>
        <div className='card-rate'>
          <div className='stars-icon'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className='comments-icon'><i class="fa-regular fa-message"></i>2</div>
        </div>
        <div className='card-sale'>450 ₴</div>
        <div className='card-price'>
          <div className='card-price-number'>379 ₴</div>
          <div className='cart-icon'><i class="fa-solid fa-cart-shopping fa-xl"></i></div>
        </div>
        <div className='card-text'>Есть в наличии</div>
      </div>
    </div>
  );
}

export default App;
