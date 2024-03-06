import React, { useState } from 'react';
import './App.css';
import Nasa from '../Nasa/Nasa';
import useFetch from 'react-fetch-hook';

function App() {
  // const { data: apod, isLoading, error } = useFetch('https://api.nasa.gov/planetary/apod?count=10&api_key=U0eUl8fUD9MKgCFRp4zeaGTmysVmSh6HcWpQjfsk');


  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  const [imgs, setImgs] = useState([])
  const getImgs = (word) => {
    fetch(`https://pixabay.com/api/?key=34416943-6c0684b9490aa16adfda3d37f&q=${word}&image_type=photo`)
      .then(response => response.json())
      .then(data => {
        setImgs(data.hits)
      })
  }

  return (
    <div className='container'>
      {/* {apod.map(item => (
        <Nasa key={item.date} image={item.url} />
      ))} */}
      <div className='pixabay'>
        <form role="search">
          <input type="search" placeholder="Search" aria-label="Search" onChange={(e)=>getImgs(e.target.value)} />
        </form>
        <div>
          {imgs && <div className='imgs'>
            {
              imgs.map(item => (
                <Nasa image={item.largeImageURL} />
              ))
            }
          </div>}
        </div>
      </div>
    </div>

  );
}

export default App;
