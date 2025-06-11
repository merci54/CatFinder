import axios from "axios";

const API_KEY = 'live_gwzUBlV6zec80E4DQ41a6I9ydxMQcgKV8yN00jrhCdBCFUo44gqt72NiaCIgR9uk';
const URL = 'https://api.thecatapi.com/v1/breeds'

const form = document.querySelector('#search-form');
const input = document.querySelector('#breed-input');
const breedsList = document.querySelector('#breeds-list');
const loader = document.querySelector('#loader');
const catCard = document.querySelector('#cat-card');

form.addEventListener('submit', handleSubmit);

fetchBreeds()

function fetchBreeds() {
    axios('https://api.thecatapi.com/v1/breeds')
        .then(res => {
            console.log(res.data)
            breedsList.insertAdjacentHTML('beforeend', populateDatalist(res.data))
        })
        .catch(error => {
            console.log(error)
        })
}

function populateDatalist(arr) {
    return arr.map(({ id, name }) => `
    <option value="${name}" data-id="${id}"></option>
  `).join("")
}

function handleSubmit(e) {
    e.preventDefault();

    const myBreed = input.value;

    const selectedBreed = [...breedsList.children].find(el => myBreed.toLowerCase().trim() === el.value.toLowerCase())

    if (!selectedBreed) {
        alert('Select!!');
        return
    }

    const myBreedId = selectedBreed.dataset.id;

    loader.classList.remove('hidden');

    axios(`https://api.thecatapi.com/v1/images/search?breed_ids=${myBreedId}`)
        .then(({ data }) => {
            if (data.length > 0) {
                const imgUrl = data[0].url;
                catCard.innerHTML = `
          <div class="card">
            <img class="card-image" src="${imgUrl}" alt="${myBreed}" />
            <div class="card-body">
              <h2 class="car-title">${myBreed}</h2>
            </div>
          </div>
        `
            } else {
                catCard.innerHTML = `<p class="error-text">Error!</p>`;
            }

        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            loader.classList.add('hidden');
            input.value = '';
        })


}