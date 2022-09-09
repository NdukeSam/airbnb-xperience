import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const names = ["alice", "bob", "charlie", "danielle", "ella"]

// const upperCase =  names.map(function (name) {
//   return (

//     `${name[0].toUpperCase()}${name.slice(1)}`
//     )
// })

// console.log(upperCase)

// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

// const append = pokemon.map( name => `<p>${name}</p>`)

// console.log(append);