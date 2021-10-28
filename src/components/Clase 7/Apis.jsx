/*import React, {useEffect, useState} from "react";
import "./style.css";

export default function App() {
  const [pokemons, usePokemons] = useState([])

  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res=>res.json())
    .then(json=>usePokemons(json.results))
  },[])

  return (
    <div>
      <h1>Pokemons</h1>
      <ul>
      {pokemons.map((pokemon, id) => <li key={id}>{pokemon.name} - {pokemon.url}</li>)}
      </ul>
    </div>
  );
}


import React from "react";
import {useState, useEffect} from "react";
import "./style.css";

export default function App() {

  const [pokemones, setPokemones] = useState([]) 

  const getData = async () => {
    try{
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/")
    const req = await data.json()
    setPokemones(req.results)
  }
  catch(e){
    console.log(e)
  }
}


useEffect(() => {
  getData()
}, [])

  return (
    <div>
      <h1>Hello StackBlitz!</h1>

      {pokemones.map((pokemon, i) => <p key={i}>{pokemon.name}</p>)}
    </div>
  );
}


import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [listaPokemones, setListaPokemones] = useState([]);

  const getData = () =>{
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(resp => resp.json())
      .catch(error => console.log(error))
      .then(resp => {
        console.log(resp);

        setListaPokemones(resp);
      })
      .finally(() => console.log('Finalizo'));
  }

  useEffect(() => {
    console.log('Entro a useEffect');

    getData();
    
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}*/