const pokemonImage = document.getElementById('pokemon-image');
const input = document.getElementById('pokemon-input');
const submitBtn = document.getElementById('submit-button');
const nextBtn = document.getElementById('next-button');

let currentPokemonName = '';

function getRandomPokemonId() {
  return Math.floor(Math.random() * 250) + 1; // 1 a 250
}

async function loadPokemon() {
  const id = getRandomPokemonId();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

  // Resetando estado inicial
  pokemonImage.classList.remove('revealed');
  input.value = '';
  input.disabled = false;
  submitBtn.disabled = false;
  nextBtn.disabled = true;

  // Define a imagem da silhueta
  pokemonImage.src = imageUrl;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    currentPokemonName = data.name.toLowerCase();
  } catch (error) {
    console.error('Erro ao carregar Pokémon:', error);
  }
}

submitBtn.addEventListener('click', () => {
  const userGuess = input.value.trim().toLowerCase();

  if (userGuess === currentPokemonName) {
    pokemonImage.classList.add('revealed');
  }

  input.disabled = true;
  submitBtn.disabled = true;
  nextBtn.disabled = false;
});

nextBtn.addEventListener('click', () => {
  loadPokemon();
});

// Carregar o primeiro Pokémon quando a página abrir
window.addEventListener('DOMContentLoaded', loadPokemon);
