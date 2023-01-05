"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const currencies = Object.values(data.currencies);
//     const languages = Object.values(data.languages);
//     const flag = Object.values(data.flags);
//     const name = Object.values(data.name);

//     const html = `
//     <article class="country">
//        <img class="country__img" src="${flag[0]}" />
//        <div class="country__data">
//          <h3 class="country__name">${name[0]}</h3>
//          <h4 class="country__region">${data.region}</h4>
//          <p class="country__row"><span>👫</span>${(
//            +data.population / 1000000
//          ).toFixed(1)}</p>
//          <p class="country__row"><span>🗣️</span>${languages[0]}</p>
//          <p class="country__row"><span>💰</span>${currencies[0].name}</p>
//        </div>
//   </article>`;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("portugal");
// getCountryData("france");
// getCountryData("japan");
// getCountryData("israel");

// const getCountryAndNeighbor = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     const neighbor = data.borders?.[0];
//     console.log(neighbor);
//     if (!neighbor) return;

//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbor}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// getCountryAndNeighbor("portugal");

const renderCountry = function (data, className = "") {
  const currencies = Object.values(data.currencies);
  const languages = Object.values(data.languages);
  const flag = Object.values(data.flags);
  const name = Object.values(data.name);
  const html = `
      <article class="country ${className}">
         <img class="country__img" src="${flag[0]}" />
         <div class="country__data">
           <h3 class="country__name">${name[0]}</h3>
           <h4 class="country__region">${data.region}</h4>
           <p class="country__row"><span>👫</span>${(
             +data.population / 1000000
           ).toFixed(1)}</p>
           <p class="country__row"><span>🗣️</span>${languages[0]}</p>
           <p class="country__row"><span>💰</span>${currencies[0].name}</p>
         </div>
    </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryDate = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
  const neighbor = data[0].borders[0];

  if (!neighbor) return;

  return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
};

getCountryDate("portugal");
