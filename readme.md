# Build a Pokémon Search App

## Description
This activity is focused on creating a Pokémon Search App project from scratch using HTML, CSS and JavaScript emphasising the use of an API retriving data as text and images in an asyncronous way. It is the fifth exercise to do be done in order to get the "JavaScript Algorithms and Data Structures" Certification by freeCodeCamp.org. 

## Requirements to be done in order to pass the automated tests
<details>
  <summary>List of all requirements: </summary>
  <br>

  1. You should have an `input` element with an `id` of `"search-input"`.
  1. You should have a `button` element with an `id` of `"search-button"`.
  1. You should have an element with an `id` of `"pokemon-name"`.
  1. You should have an element with an `id` of `"pokemon-id"`.
  1. You should have an element with an `id` of `"weight"`.
  1. You should have an element with an `id` of `"height"`.
  1. You should have an element with an `id` of `"types"`.
  1. You should have an element with an `id` of `"hp"`.
  1. You should have an element with an `id` of `"attack"`.
  1. You should have an element with an `id` of `"defense"`.
  1. You should have an element with an `id` of `"special-attack"`.
  1. You should have an element with an `id` of `"special-defense"`.
  1. You should have an element with an `id` of `"speed"`.
  1. When the `#search-input` element contains the value `Red` and the `#search-button` element is clicked, an alert should appear with the text `"Pokémon not found"`.
  1. When the `#search-input` element contains the value `Pikachu` and the `#search-button` element is clicked, the values in the `#pokemon-name`, `#pokemon-id`, `#weight`, `#height`, `#hp`, `#attack`, `#defense`, `#special-attack`, `#special-defense`, and `#speed` elements should be `PIKACHU`, `#25` or `25`, `Weight: 60` or `60`, `Height: 4` or `4`, `35`, `55`, `40`, `50`, `50`, and `90`, respectively.
  1. When the `#search-input` element contains the value `Pikachu` and the `#search-button` element is clicked, you should add an `img` element with the `id` of `"sprite"` and the `src` set to the Pokémon's `front_default` sprite to the page.
  1. When the `#search-input` element contains the value `Pikachu` and the `#search-button` element is clicked, the `#types` element should contain a single inner element with the value `ELECTRIC`. The `#types` element content should be cleared between searches.
  1. When the `#search-input` element contains the value `94` and the `#search-button` element is clicked, the values in the `#pokemon-name`, `#pokemon-id`, `#weight`, `#height`, `#hp`, `#attack`, `#defense`, `#special-attack`, `#special-defense`, and `#speed`elements should be `GENGAR`, `#94` or `94`, `Weight: 405` or `405`, `Height: 15` or `15`, `60`, `65`, `60`, `130`, `75`, and `110`, respectively.
  1. When the `#search-input` element contains the value `94` and the `#search-button` element is clicked, you should add an `img` element with the `id` of `sprite` and the `src` set to the Pokémon's `front_default` sprite to the page.
  1. When the `#search-input` element contains the value `94` and the `#search-button` element is clicked, the `#types` element should contain two inner elements with the text values `GHOST` and `POISON`, respectively. The `#types` element content should be cleared between searches.
</details>


## Automated Tests the project must pass
<details>
  <summary>List of all automated tests: </summary>
  <br>

  - You should have an `input` element with an `id` of `"search-input"` and is required.
  - You should have a `button` element with an `id` of `"search-button"`.
  - You should have an element with an `id` of `"pokemon-name"`.
  - You should have an element with an `id` of `"pokemon-id"`.
  - You should have an element with an `id` of `"weight"`.
  - You should have an element with an `id` of `"height"`.
  - You should have an element with an `id` of `"types"`.
  - You should have an element with an `id` of `"hp"`.
  - You should have an element with an `id` of `"attack"`.
  - You should have an element with an `id` of `"defense"`.
  - You should have an element with an `id` of `"special-attack"`.
  - You should have an element with an `id` of `"special-defense"`.
  - You should have an element with an `id` of `"speed"`.
  - When the `#search-input` element contains the value `Red` and the `#search-button` element is clicked, an alert should appear with the text `"Pokémon not found"`.
  - When the `#search-input` element contains the value `Pikachu` and the `#search-button` element is clicked, the values in the `#pokemon-name`, `#pokemon-id`, `#weight`, `#height`, `#hp`, `#attack`, `#defense`, `#special-attack`, `#special-defense`, and `#speed` elements should be `PIKACHU`, `#25` or 25, `Weight: 60` or `60`, `Height: 4` or `4`, `35`, `55`, `40`, `50`, `50`, and `90`, respectively.
  - When the `#search-input` element contains the value `Pikachu` and the `#search-button` element is clicked, you should add an `img` element with the id of `"sprite"` and the `src` set to the Pokémon's `front_default` sprite to the page.
  - When the `#search-input` element contains the value `Pikachu` and the `#search-button` element is clicked, the `#types` element should contain a single inner element with the value `ELECTRIC`. Make sure the `#types` element content is cleared between searches.
  - When the `#search-input` element contains the value `94` and the `#search-button` element is clicked, the values in the `#pokemon-name`, `#pokemon-id`, `#weight`, `#height`, `#hp`, `#attack`, `#defense`, `#special-attack`, `#special-defense`, and `#speed` elements should be `GENGAR`, `#94` or `94`, `Weight: 405` or `405`, `Height: 15` or `15`, `60`, `65`, `60`, `130`, `75`, and `110`, respectively.
  - When the `#search-input` element contains the value `94` and the `#search-button` element is clicked, you should add an `img` element with the id of `"sprite"` and the `src` set to the Pokémon's `front_default` sprite to the page.
  - When the `#search-input` element contains the value `94` and the `#search-button` element is clicked, the `#types` element should contain two inner elements with the text values `GHOST` and `POISON`, respectively. Make sure the `#types` element content is cleared between searches.
  - When the `#search-input` element contains an invalid Pokemon name and the `#search-button` element is clicked, an alert should appear with the text `"Pokémon not found"`.
  - When the `#search-input` element contains a valid Pokemon id and the `#search-button` element is clicked, the UI should be filled with the correct data.

</details>