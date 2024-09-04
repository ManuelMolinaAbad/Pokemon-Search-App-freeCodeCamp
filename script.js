"use strict"

const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const sprite = document.getElementById("sprite-box");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const types = document.getElementById("types");
const weight = document.getElementById("weight");
const height = document.getElementById("height");

const cleanFeed = () =>{
  pokemonName.textContent = "";
  pokemonId.textContent = "";
  sprite.innerHTML = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
  weight.textContent = "";
  height.textContent = "";
}

const fillFeed = getData =>{
  const data = getData;
  
  pokemonName.textContent = data.name.toUpperCase();
  pokemonId.textContent = "#" + data.id;
  sprite.innerHTML = `<img src="${data.sprites.front_default}" id="sprite">`;
  hp.textContent = data.stats[0].base_stat;
  attack.textContent = data.stats[1].base_stat;
  defense.textContent = data.stats[2].base_stat;
  specialAttack.textContent = data.stats[3].base_stat;
  specialDefense.textContent = data.stats[4].base_stat;
  speed.textContent = data.stats[5].base_stat;
  weight.textContent = data.weight + "kg";
  height.textContent = data.height + "m";

  types.innerHTML = data.types.map((ele) =>`<span class="type ${ele.type.name}">${ele.type.name.toUpperCase()}</span>`).join("");
}

const getPokemon = async () =>{
  try{
    const pokemonNameLowerCase = searchInput.value.toLowerCase();
    const response = await fetch(url+pokemonNameLowerCase);
    const data = await response.json();
    console.log(data);

    cleanFeed();
    fillFeed(data);
    
  } catch(err){
    alert("Pokémon not found");
    console.log(err);
  }
}

searchForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  getPokemon();
});