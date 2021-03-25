import styled from 'styled-components'
import React, { useState, useEffect} from 'react';
import { GlobalStyle } from './styles/global';

export function App() {

  // const APP_ID = '3e104355';
  // const APP_KEY = 'abdd1471bf39936065c257aa9ec63601'

  // useEffect( () => {
  //   getRecipes();
  // }, [])

  // const getRecipes = async () => {
  //   const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  //   const data = await response.json();
  //   console.log(data.hits);
  // }
  
  // 
  // const buttonClickHandler = () => {
  //   e.preventDefault();
  // }

  return (
    <div className="App">
      {/* <form className="search-form">
        <input type="text" className="search-bar" />
        <button 
          className="search-button"
          // onClick={buttonClickHandler}
        >Search</button>
      </form> */}
      <h1>MyRecepis</h1>
      <GlobalStyle />
      
    </div>
  );
}
