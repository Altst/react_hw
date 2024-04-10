import { useState } from "react";
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    // <div className="container">
    //   <div className="left">
    //     <div className="left-title">
    //       <div className="left-main-title">Logbook</div>
    //       <div className="left-sab-title">для преподавателей</div>
    //     </div>
    //     <div className="left-languages">
    //       <div className="group">
    //         <div className="group-item">ru</div>
    //         <div className="group-item">en</div>
    //         <div className="group-item">bg</div>
    //         <div className="group-item">pt</div>
    //         <div className="group-item">ua</div>
    //         <div className="group-item">ro</div>
    //         <div className="group-item">ge</div>
    //         <div className="group-item">az</div>
    //       </div>
    //       <div className="group">
    //         <div className="group-item">cs</div>
    //         <div className="group-item">sk</div>
    //         <div className="group-item">es</div>
    //         <div className="group-item">pl</div>
    //         <div className="group-item">kz</div>
    //         <div className="group-item">fr</div>
    //         <div className="group-item">uz</div>
    //         <div className="group-item">vi</div>
    //       </div>
    //       <div className="group">
    //         <div className="group-item">de</div>
    //         <div className="group-item">tr</div>
    //         <div className="group-item">am</div>
    //         <div className="group-item">ky</div>
    //         <div className="group-item">hu</div>
    //         <div className="group-item">ka</div>
    //         <div className="group-item">be</div>
    //         <div className="group-item">tha</div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="right">
    //     <form onSubmit={handleSubmit(onSubmit)} className='form-2'>
    //       <input className='input-2' type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder='Логін' />
    //       {errors.email && <p>Email is required and must be valid</p>}
    //       <input className='input-2' type="password" {...register("password", { required: true })} placeholder='Пароль' />
    //       {errors.password && <p>Password is required</p>}
    //       <button className='button-2' type="submit">Увійти</button>
    //     </form>
    //   </div>
    // </div>
    <div className='container'>
      <div className='first-title'>Вхід на сайт <span className='auto-ria'>AUTO.RIA</span></div>
      <div className='sign-in-by'>
        <div className='sign-in-by-app'>
          <i className="fa-brands fa-google icon"></i>
          <div className='text'>Увійти через Google</div>
        </div>
        <div className='sign-in-by-app'>
          <i class="fa-brands fa-telegram icon"></i>
          <div className='text'>Увійти через Telegram</div>
        </div>
        <div className='sign-in-by-app'>
          <i class="fa-solid fa-mobile-screen-button icon"></i>
          <div className='text'>Увійти через Дію</div>
        </div>
      </div>
      <div className='second-title'>Або</div>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <input className='input' type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder='Телефон або e-mail' />
        {errors.email && <p>Email is required and must be valid</p>}
        <input className='input' type="password" {...register("password", { required: true })} placeholder='Пароль' />
        {errors.password && <p>Password is required</p>}
        <div className="checkbox-form">
          <label htmlFor="remember">
            <input className="checkbox" type="checkbox" name="remember" checked={isChecked} onChange={handleChange} />
            Запам'ятати мене
          </label>
          <div className="checkbox-text">Забули пароль?</div>
        </div>
        <button className='button' type="submit">Увійти</button>
      </form>
      <div className="third-title">Зареєструватися на AUTO.RIA</div>
      <div className="fourth-title">
        <div className="fourth-title-one">Виникли питання?</div>
        <div className="fourth-title-two">Служба турботи про користувачів: </div>
      </div>
    </div>
  );
}

export default App;
