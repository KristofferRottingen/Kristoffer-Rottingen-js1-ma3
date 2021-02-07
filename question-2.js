// Question 2
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const names = document.querySelector(".name")

const ratings = document.querySelector(".rating")

const tagsAmount = document.querySelector(".tags-amount")

async function getResults() {

    const response = await fetch(url);
    
    const results = await response.json();

    const facts = results.results;

    names.innerHTML = "";

    ratings.innerHTML = "";

    tagsAmount.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {

        if(i === 8){
            break;
        }

        names.innerHTML += `<div class="name">${facts[i].name}</div>`;

        ratings.innerHTML += `<div class="name">${facts[i].rating}</div>`;

        tagsAmount.innerHTML += `<div class="name">${facts[i].tags.length}</div>`;
    }
}

getResults();