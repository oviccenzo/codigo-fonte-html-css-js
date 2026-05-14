const pokemonImage = document.getElementById('pokemon-image');
const input = document.getElementById('guess-input'); // ID atualizado
const submitBtn = document.getElementById('submit-btn'); // ID atualizado
const nextBtn = document.getElementById('next-btn');
const feedback = document.getElementById('feedback');

let currentPokemonName = '';

function getRandomPokemonId() {
  return Math.floor(Math.random() * 250) + 1;
}

async function loadPokemon() {
  const id = getRandomPokemonId();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

  // Reset de interface
  pokemonImage.classList.remove('revealed');
  pokemonImage.src = imageUrl;
  input.value = '';
  input.disabled = false;
  submitBtn.disabled = false;
  nextBtn.disabled = true;
  feedback.textContent = '';
  feedback.className = '';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    currentPokemonName = data.name.toLowerCase();
  } catch (error) {
    console.error('Erro:', error);
    feedback.textContent = 'Erro ao carregar Pokémon.';
  }
}

submitBtn.addEventListener('click', () => {
  const userGuess = input.value.trim().toLowerCase();

  if (!userGuess) return;

  if (userGuess === currentPokemonName) {
    pokemonImage.classList.add('revealed');
    feedback.textContent = `Acertou! É o ${currentPokemonName}!`;
    feedback.className = 'acerto';
    
    // Finaliza a rodada
    input.disabled = true;
    submitBtn.disabled = true;
    nextBtn.disabled = false;
  } else {
    feedback.textContent = "Errado! Tente novamente.";
    feedback.className = 'erro';
    input.value = '';
    input.focus();
  }
});

nextBtn.addEventListener('click', loadPokemon);

// Suporte para a tecla Enter
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && !submitBtn.disabled) {
    submitBtn.click();
  }
});

window.addEventListener('DOMContentLoaded', loadPokemon);