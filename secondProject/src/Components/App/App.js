import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [currencies, setCurrencies] = useState([])
  const [firstCurrency, setFirstCurrency] = useState('UAH')
  const [secondCurrency, setSecondCurrency] = useState('USD')
  const [sale, setSale] = useState('')
  const [buy, setBuy] = useState('')
  const [input, setInput] = useState('')
  const [result, setResult] = useState('0.00')

  const handleFirstValueChange = (e) => {
    setFirstCurrency(e.target.value)
  }
  const handleSecondValueChange = (e) => {
    setSecondCurrency(e.target.value)
  }
  const handleInput = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    getCurrencies()
  }, [])
  useEffect(() => {
    console.log(firstCurrency + secondCurrency);
    currencies.forEach(e => {
      if (e.ccy === secondCurrency) {
        console.log(e.ccy)
        setSale(e.sale)
        setBuy(e.buy)
      }
    })
  }, [firstCurrency, secondCurrency]);
  useEffect(() => {
    currencies.forEach(e => {
      if (e.ccy === secondCurrency) {
        console.log(e.ccy)
        setSale(e.sale)
        setBuy(e.buy)
      }
    })
  }, [currencies]);
  useEffect(() => {
    if(input.length > 0){
      setResult(parseFloat(input)/parseFloat(buy))
    }
    else{
      setResult('0.00')
    }
  }, [input])

  const getCurrencies = () => {
    axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then(function (response) {
        setCurrencies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Валюта</th>
            <th scope="col">Купівля</th>
            <th scope="col">Продаж</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map(currency => (
            <tr>
              <td>{currency.ccy}<span className='uah'> {currency.base_ccy}</span></td>
              <td>{currency.buy}</td>
              <td>{currency.sale}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='right'>
        <div className='right-title'>Конвертер валют</div>
        <div className='right-currencies'>
          <select className="form-select" aria-label="Default select example" onChange={(e) => { handleFirstValueChange(e) }}>
            <option value='UAH'>Українська гривня</option>
            <option value="USD">Долар США</option>
            <option value="EUR">Євро</option>
          </select>
          <select className="form-select" aria-label="Default select example" onChange={(e) => { handleSecondValueChange(e) }}>
            <option value='USD'>Долар США</option>
            <option value="UAH">Українська гривня</option>
            <option value="EUR">Євро</option>
          </select>
          <div className='right-currency'>{sale}</div>
        </div>
        <div className='right-money'>
          <input className='input' onChange={handleInput}></input>
          <div className='output'>{result}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
